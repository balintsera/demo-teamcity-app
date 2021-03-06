#!/bin/bash
TARGET=src.zip

# prune
npm prune --production
# zip
if [ -f $TARGET ]; then
    rm $TARGET
fi

echo "Zipping"
zip -q -r $TARGET . -x $TARGET -x deploy.sh

# upload
echo "Publishing"
aws lambda update-function-code --function-name $FUNC_ARN --zip-file fileb://$TARGET --publish
