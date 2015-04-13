# Narrow the Gapp

A single-serving web site displays the wage gap between men and women in the United States on a per-occupation basis.
All factoids based on data provided by the U.S. Bureau of Labor Statistics. See it in action at
[http://narrowthegapp.com](http://narrowthegapp.com).

## LICENSE

Narrow the Gapps's source code is licensed under the
[GNU General Public License](http://www.gnu.org/licenses/gpl.html). Please copy and repurpose.

## INSTALLATION

### Requirements

* [Vagrant](https://vagrantup.com)
* [VirtualBox](https://www.virtualbox.org/)
* ```vagrant plugin install vagrant-bindfs```

### Set up

Clone the repository:

    $ git clone git@github.com:ginatrapani/narrowthegapp.git

Get required submodules:

    $ cd narrowthegapp; git submodule init; git submodule update --recursive

### Run

Spin up virtual machine: (first run takes awhile)

    $ vagrant up

### Use

See Narrow the Gapp in your browser:

* http://narrowthegapp.dev/

Note: If narrowthegapp.dev doesn't resolve, make sure the following line is in your host computer's /etc/hosts file:

    192.168.56.101 default narrowthegapp.dev www.narrowthegapp.dev

Use the code editor and git client of your choice on your host machine. Edit files in the narrowthegapp directory.

### Tools

Adminer database admin:

* http://192.168.56.101/adminer/
* narrowthegapp / equalpayforequalwork

SSH in:

    $ vagrant ssh

Destroy virtual machine:

    $ vagrant destroy

Note:  This does not delete setup files or the contents of the default directory.

### Modify

This Vagrant virtual machine was built with [PuPHPet](http://puphpet.com). To modify it for your own purposes, drag and drop puphpet/config.yaml onto (http://puphpet.com) and regenerate.

## EXTERNAL LIBRARIES

- [Isoceles](http://ginatrapani.github.io/isosceles/) (Submodule)
