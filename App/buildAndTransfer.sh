#!/bin/bash

npm run build --prod
rm -r www/build/*.js.map

rsync -r --verbose --progress  ./www/* agmgermakw-pascal@ftp.cluster003.hosting.ovh.net:/homez.2352/agmgermakw/www/mobility-fair/
