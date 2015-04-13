# This depends on puppetlabs-sqlite: https://github.com/puppetlabs/puppetlabs-sqlite.git
# Creates database, adds user
# If requested, imports DB
define puphpet::sqlite::db (
  $name,
  $owner,
  $group = 0,
  $mode = '0775',
  $sql_file = false
) {

  if $name == '' or $owner == '' or $mode == '' {
    fail('SQLite requires that name, owner, group, and mode be set.')
  }

  file { '/var/lib/sqlite':
    ensure  => directory,
    owner   => $owner,
    group   => $group,
    mode    => '0775',
    require => User[$owner]
  } ->
  sqlite::db { $name:
    owner => $owner,
    group => $group,
    mode  => $mode
  }

  if $sql_file {
    $sqlite_db = "sqlite3 /var/lib/sqlite/${name}.db"

    exec{ "${name}-import":
      command     => "cat ${sql_file} | sudo ${sqlite_db}",
      logoutput   => true,
      refreshonly => $refresh,
      require     => Sqlite::Db[$name],
      onlyif      => "test -f ${sql_file}"
    }
  }

}
