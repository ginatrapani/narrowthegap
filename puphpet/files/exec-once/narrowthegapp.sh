# Copy Isosceles config file
cp /var/www/puphpet/files/narrowthegapp-setup/configs/isosceles.config.inc.php /var/www/webapp/extlibs/isosceles/libs/config.inc.php

# Copy NTG config file
#cp /var/www/webapp/config.sample.inc.php /var/www/webapp/config.inc.php

# Make data dir and set perms
mkdir /home/vagrant/data

# Set web-accessible perms
chown -R www-user /home/vagrant/data/

# Load sample data
mysql -u root -pequalpayforequalwork -D narrowthegapp < /var/www/install/sql/build-db_mysql.sql

