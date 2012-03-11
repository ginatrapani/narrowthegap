# Narrow the Gapp

A single-serving web site displays the wage gap between men and women in the United States on a per-occupation basis.
All factoids based on data provided by the U.S. Bureau of Labor Statistics. See it in action at 
[http://narrowthegapp.com](http://narrowthegapp.com).

## LICENSE

Narrow the Gapps's source code is licensed under the
[GNU General Public License](http://www.gnu.org/licenses/gpl.html). Please copy and repurpose.

## INSTALLATION

* Create NTG's single database table using `install/sql/build-db_mysql.sql`.
* Create the application config file by copying `webapp/extlibs/isosceles/libs/config.sample.inc.php` to
  `config.inc.php` in that same directory.
* Enter all the required values into `config.inc.php`, especially your database credentials, writable data_dir path,
  and templates path.

## EXTERNAL LIBRARIES

- [Isoceles](http://isosceleskit.org) (Submodule) 
- [Twitter Bootstrap](http://twitter.github.com/bootstrap/) (Included)
