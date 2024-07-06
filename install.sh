#!/usr/bin/bash

# This script expects you to have apache2 installed and you being in the repo directory.


rsync -aP --exclude=.gitignore --exclude=git* --exclude=install.sh ./* /var/www/html
