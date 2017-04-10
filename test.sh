curl -i \
    -H "Content-Type: application/json" \
    -X POST -d '{"text": "Darth Vader is the father of Luke Skywalker."}' \
    https://guarded-tor-39875.herokuapp.com/check
echo '\n'
