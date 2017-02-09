#!/bin/bash

npm run build --prod
rsync --verbose --progress  ./www/* agmgermakw-pascal@ftp.cluster003.hosting.ovh.net:/homez.2352/agmgermakw/www/mobility-fair/
