@echo off
mongoimport -d epc-ng -c user --type json --file ./data/user.json --drop --jsonArray
mongoimport -d epc-ng -c lang --type json --file ./data/lang.json --drop --jsonArray
mongoimport -d epc-ng -c database --type json --file ./data/database.json --drop --jsonArray
mongoimport -d epc-ng -c brandSeriesModel --type json --file ./data/brandSeriesModel.json --drop --jsonArray
mongoimport -d epc-ng -c queryResult --type json --file ./data/queryResult.json --drop --jsonArray
mongoimport -d epc-ng -c tree --type json --file ./data/tree.json --drop --jsonArray
mongoimport -d epc-ng -c legendData --type json --file ./data/legendData.json --drop --jsonArray
pause