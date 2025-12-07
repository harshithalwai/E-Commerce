## How to use the Debug 

import debug from "debug";
## run the command in cmd 
$env:DEBUG="app:*";
##
const Log = debug("app:db");
Log("🚀 MongoDB connected successfully");