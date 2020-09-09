# Influx V.1.8 CLI

show databases

use database <database_name>

drop database <database_name>

show field keys

show measurements

Handy queries:
NOTE: select <tag_key> from <measurement_name> doesnt not return anything

1. select * from <measurement_name>
returns all data in the measurement
e.g. select * from payload

2. select <field_key> from <measurement_name>
returns all values of the key
e.g. select "ejnavg" from payload

3. select * from <measurement_name> where <field_key> >= <value> and <field_key> >= <value>
Returns all data where value for set condition 
e.g. select * from "payload" where "batch" = 5 and "rotation" = 1

3. Count no of batch number = 2: 
select count(batch) from payload where("batch"=2)
