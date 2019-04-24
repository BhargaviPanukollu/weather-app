const WeatherResultsMock = {
    "forecastFahrein": {"cod":"200","message":0.0101,"cnt":40,"list":[{"dt":1555956000,"main":{"temp":71.55,"temp_min":61.8,"temp_max":71.55,"pressure":1019.575,"sea_level":1019.575,"grnd_level":1009.394,"humidity":65,"temp_kf":5.42},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"clouds":{"all":28},"wind":{"speed":7.16,"deg":330.935},"sys":{"pod":"d"},"dt_txt":"2019-04-22 18:00:00"},{"dt":1555966800,"main":{"temp":73.62,"temp_min":66.3,"temp_max":73.62,"pressure":1018.276,"sea_level":1018.276,"grnd_level":1008.239,"humidity":58,"temp_kf":4.06},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":11.14,"deg":302.969},"sys":{"pod":"d"},"dt_txt":"2019-04-22 21:00:00"},{"dt":1555977600,"main":{"temp":67.14,"temp_min":62.25,"temp_max":67.14,"pressure":1016.811,"sea_level":1016.811,"grnd_level":1007.028,"humidity":74,"temp_kf":2.71},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":11.74,"deg":296.414},"sys":{"pod":"n"},"dt_txt":"2019-04-23 00:00:00"},{"dt":1555988400,"main":{"temp":59.68,"temp_min":57.25,"temp_max":59.68,"pressure":1016.235,"sea_level":1016.235,"grnd_level":1006.065,"humidity":84,"temp_kf":1.35},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":7.92,"deg":301.522},"sys":{"pod":"n"},"dt_txt":"2019-04-23 03:00:00"},{"dt":1555999200,"main":{"temp":56.61,"temp_min":56.61,"temp_max":56.61,"pressure":1016.801,"sea_level":1016.801,"grnd_level":1006.336,"humidity":83,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":5.44,"deg":302.248},"sys":{"pod":"n"},"dt_txt":"2019-04-23 06:00:00"},{"dt":1556010000,"main":{"temp":56.92,"temp_min":56.92,"temp_max":56.92,"pressure":1016.249,"sea_level":1016.249,"grnd_level":1005.603,"humidity":84,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":5.53,"deg":320.92},"sys":{"pod":"n"},"dt_txt":"2019-04-23 09:00:00"},{"dt":1556020800,"main":{"temp":57.83,"temp_min":57.83,"temp_max":57.83,"pressure":1015.772,"sea_level":1015.772,"grnd_level":1005.239,"humidity":82,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":2.93,"deg":42.33},"sys":{"pod":"n"},"dt_txt":"2019-04-23 12:00:00"},{"dt":1556031600,"main":{"temp":61.41,"temp_min":61.41,"temp_max":61.41,"pressure":1016.194,"sea_level":1016.194,"grnd_level":1005.781,"humidity":70,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":2.3,"deg":346.489},"sys":{"pod":"d"},"dt_txt":"2019-04-23 15:00:00"},{"dt":1556042400,"main":{"temp":68.06,"temp_min":68.06,"temp_max":68.06,"pressure":1016.877,"sea_level":1016.877,"grnd_level":1006.494,"humidity":52,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":2},"wind":{"speed":5.7,"deg":341.281},"sys":{"pod":"d"},"dt_txt":"2019-04-23 18:00:00"},{"dt":1556053200,"main":{"temp":71.15,"temp_min":71.15,"temp_max":71.15,"pressure":1015.724,"sea_level":1015.724,"grnd_level":1005.416,"humidity":50,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":1},"wind":{"speed":10.09,"deg":306.123},"sys":{"pod":"d"},"dt_txt":"2019-04-23 21:00:00"},{"dt":1556064000,"main":{"temp":66.32,"temp_min":66.32,"temp_max":66.32,"pressure":1014.199,"sea_level":1014.199,"grnd_level":1004.068,"humidity":62,"temp_kf":0},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02n"}],"clouds":{"all":14},"wind":{"speed":10.51,"deg":294.789},"sys":{"pod":"n"},"dt_txt":"2019-04-24 00:00:00"},{"dt":1556074800,"main":{"temp":59.6,"temp_min":59.6,"temp_max":59.6,"pressure":1013.82,"sea_level":1013.82,"grnd_level":1003.589,"humidity":80,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"clouds":{"all":59},"wind":{"speed":8.12,"deg":298.295},"sys":{"pod":"n"},"dt_txt":"2019-04-24 03:00:00"},{"dt":1556085600,"main":{"temp":57.62,"temp_min":57.62,"temp_max":57.62,"pressure":1014.74,"sea_level":1014.74,"grnd_level":1004.508,"humidity":86,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"clouds":{"all":47},"wind":{"speed":5.39,"deg":293.617},"sys":{"pod":"n"},"dt_txt":"2019-04-24 06:00:00"},{"dt":1556096400,"main":{"temp":56.91,"temp_min":56.91,"temp_max":56.91,"pressure":1014.261,"sea_level":1014.261,"grnd_level":1003.819,"humidity":88,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":4.9,"deg":284.119},"sys":{"pod":"n"},"dt_txt":"2019-04-24 09:00:00"},{"dt":1556107200,"main":{"temp":56.11,"temp_min":56.11,"temp_max":56.11,"pressure":1013.495,"sea_level":1013.495,"grnd_level":1003.023,"humidity":91,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":2.68,"deg":299.947},"sys":{"pod":"n"},"dt_txt":"2019-04-24 12:00:00"},{"dt":1556118000,"main":{"temp":59.65,"temp_min":59.65,"temp_max":59.65,"pressure":1014.428,"sea_level":1014.428,"grnd_level":1003.814,"humidity":82,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":1.32,"deg":282.466},"sys":{"pod":"d"},"dt_txt":"2019-04-24 15:00:00"},{"dt":1556128800,"main":{"temp":67.56,"temp_min":67.56,"temp_max":67.56,"pressure":1015.053,"sea_level":1015.053,"grnd_level":1004.403,"humidity":65,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":4.97,"deg":300.428},"sys":{"pod":"d"},"dt_txt":"2019-04-24 18:00:00"},{"dt":1556139600,"main":{"temp":69.97,"temp_min":69.97,"temp_max":69.97,"pressure":1014.165,"sea_level":1014.165,"grnd_level":1003.64,"humidity":63,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":9.8,"deg":292.562},"sys":{"pod":"d"},"dt_txt":"2019-04-24 21:00:00"},{"dt":1556150400,"main":{"temp":66.36,"temp_min":66.36,"temp_max":66.36,"pressure":1012.336,"sea_level":1012.336,"grnd_level":1001.984,"humidity":71,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":10.09,"deg":294.294},"sys":{"pod":"n"},"dt_txt":"2019-04-25 00:00:00"},{"dt":1556161200,"main":{"temp":60.21,"temp_min":60.21,"temp_max":60.21,"pressure":1012.555,"sea_level":1012.555,"grnd_level":1002.246,"humidity":81,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":7.2,"deg":298.808},"sys":{"pod":"n"},"dt_txt":"2019-04-25 03:00:00"},{"dt":1556172000,"main":{"temp":58.3,"temp_min":58.3,"temp_max":58.3,"pressure":1013.587,"sea_level":1013.587,"grnd_level":1003.33,"humidity":82,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":5.39,"deg":287.885},"sys":{"pod":"n"},"dt_txt":"2019-04-25 06:00:00"},{"dt":1556182800,"main":{"temp":56.89,"temp_min":56.89,"temp_max":56.89,"pressure":1012.944,"sea_level":1012.944,"grnd_level":1002.65,"humidity":83,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":4.9,"deg":273.088},"sys":{"pod":"n"},"dt_txt":"2019-04-25 09:00:00"},{"dt":1556193600,"main":{"temp":55.75,"temp_min":55.75,"temp_max":55.75,"pressure":1012.879,"sea_level":1012.879,"grnd_level":1002.454,"humidity":86,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":3.94,"deg":266.974},"sys":{"pod":"n"},"dt_txt":"2019-04-25 12:00:00"},{"dt":1556204400,"main":{"temp":58.04,"temp_min":58.04,"temp_max":58.04,"pressure":1014.045,"sea_level":1014.045,"grnd_level":1003.526,"humidity":81,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":3.11,"deg":253.93},"sys":{"pod":"d"},"dt_txt":"2019-04-25 15:00:00"},{"dt":1556215200,"main":{"temp":64.9,"temp_min":64.9,"temp_max":64.9,"pressure":1014.683,"sea_level":1014.683,"grnd_level":1004.207,"humidity":66,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":5.37,"deg":246.61},"sys":{"pod":"d"},"dt_txt":"2019-04-25 18:00:00"},{"dt":1556226000,"main":{"temp":66.5,"temp_min":66.5,"temp_max":66.5,"pressure":1014.336,"sea_level":1014.336,"grnd_level":1004.165,"humidity":63,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":7.67,"deg":257.944},"sys":{"pod":"d"},"dt_txt":"2019-04-25 21:00:00"},{"dt":1556236800,"main":{"temp":64.85,"temp_min":64.85,"temp_max":64.85,"pressure":1013.424,"sea_level":1013.424,"grnd_level":1003.281,"humidity":66,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":7,"deg":258.812},"sys":{"pod":"n"},"dt_txt":"2019-04-26 00:00:00"},{"dt":1556247600,"main":{"temp":58.21,"temp_min":58.21,"temp_max":58.21,"pressure":1014.117,"sea_level":1014.117,"grnd_level":1004.114,"humidity":79,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":10},"wind":{"speed":5.91,"deg":268.547},"sys":{"pod":"n"},"dt_txt":"2019-04-26 03:00:00"},{"dt":1556258400,"main":{"temp":56.48,"temp_min":56.48,"temp_max":56.48,"pressure":1015.204,"sea_level":1015.204,"grnd_level":1005.271,"humidity":82,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":8},"wind":{"speed":3.6,"deg":245.009},"sys":{"pod":"n"},"dt_txt":"2019-04-26 06:00:00"},{"dt":1556269200,"main":{"temp":55.31,"temp_min":55.31,"temp_max":55.31,"pressure":1014.603,"sea_level":1014.603,"grnd_level":1004.435,"humidity":83,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"clouds":{"all":36},"wind":{"speed":2.75,"deg":236.05},"sys":{"pod":"n"},"dt_txt":"2019-04-26 09:00:00"},{"dt":1556280000,"main":{"temp":55.24,"temp_min":55.24,"temp_max":55.24,"pressure":1014.226,"sea_level":1014.226,"grnd_level":1003.959,"humidity":81,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"clouds":{"all":45},"wind":{"speed":3.02,"deg":214.16},"sys":{"pod":"n"},"dt_txt":"2019-04-26 12:00:00"},{"dt":1556290800,"main":{"temp":58.52,"temp_min":58.52,"temp_max":58.52,"pressure":1015.236,"sea_level":1015.236,"grnd_level":1004.857,"humidity":73,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"clouds":{"all":73},"wind":{"speed":2.57,"deg":226.337},"sys":{"pod":"d"},"dt_txt":"2019-04-26 15:00:00"},{"dt":1556301600,"main":{"temp":64.96,"temp_min":64.96,"temp_max":64.96,"pressure":1016.034,"sea_level":1016.034,"grnd_level":1005.753,"humidity":60,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"clouds":{"all":82},"wind":{"speed":3.65,"deg":251.755},"sys":{"pod":"d"},"dt_txt":"2019-04-26 18:00:00"},{"dt":1556312400,"main":{"temp":68.74,"temp_min":68.74,"temp_max":68.74,"pressure":1015.29,"sea_level":1015.29,"grnd_level":1004.935,"humidity":52,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"clouds":{"all":83},"wind":{"speed":6.53,"deg":253.971},"sys":{"pod":"d"},"dt_txt":"2019-04-26 21:00:00"},{"dt":1556323200,"main":{"temp":64.78,"temp_min":64.78,"temp_max":64.78,"pressure":1014.307,"sea_level":1014.307,"grnd_level":1004.201,"humidity":63,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"clouds":{"all":85},"wind":{"speed":8.75,"deg":274.48},"sys":{"pod":"n"},"dt_txt":"2019-04-27 00:00:00"},{"dt":1556334000,"main":{"temp":58.72,"temp_min":58.72,"temp_max":58.72,"pressure":1014.599,"sea_level":1014.599,"grnd_level":1004.485,"humidity":75,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"clouds":{"all":60},"wind":{"speed":4.16,"deg":281.376},"sys":{"pod":"n"},"dt_txt":"2019-04-27 03:00:00"},{"dt":1556344800,"main":{"temp":57.08,"temp_min":57.08,"temp_max":57.08,"pressure":1015.391,"sea_level":1015.391,"grnd_level":1005.057,"humidity":77,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"clouds":{"all":33},"wind":{"speed":3.91,"deg":261.563},"sys":{"pod":"n"},"dt_txt":"2019-04-27 06:00:00"},{"dt":1556355600,"main":{"temp":56.03,"temp_min":56.03,"temp_max":56.03,"pressure":1014.393,"sea_level":1014.393,"grnd_level":1004.038,"humidity":80,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":3.47,"deg":244.46},"sys":{"pod":"n"},"dt_txt":"2019-04-27 09:00:00"},{"dt":1556366400,"main":{"temp":55.02,"temp_min":55.02,"temp_max":55.02,"pressure":1013.792,"sea_level":1013.792,"grnd_level":1003.496,"humidity":83,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":4.34,"deg":267.817},"sys":{"pod":"n"},"dt_txt":"2019-04-27 12:00:00"},{"dt":1556377200,"main":{"temp":57.03,"temp_min":57.03,"temp_max":57.03,"pressure":1014.277,"sea_level":1014.277,"grnd_level":1003.825,"humidity":80,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":3.29,"deg":271.017},"sys":{"pod":"d"},"dt_txt":"2019-04-27 15:00:00"}],"city":{"id":5375480,"name":"Mountain View","unit":"imperial","coord":{"lat":37.3894,"lon":-122.0833},"country":"US","population":74066}},
    "forecastCelsius": {"cod":"200","message":0.012,"cnt":40,"list":[{"dt":1555956000,"main":{"temp":21.29,"temp_min":17.03,"temp_max":21.29,"pressure":1019.691,"sea_level":1019.691,"grnd_level":1009.526,"humidity":59,"temp_kf":4.26},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":3.49,"deg":327.286},"sys":{"pod":"d"},"dt_txt":"2019-04-22 18:00:00"},{"dt":1555966800,"main":{"temp":22.02,"temp_min":18.83,"temp_max":22.02,"pressure":1018.237,"sea_level":1018.237,"grnd_level":1008.187,"humidity":59,"temp_kf":3.19},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":5.11,"deg":300.598},"sys":{"pod":"d"},"dt_txt":"2019-04-22 21:00:00"},{"dt":1555977600,"main":{"temp":19.04,"temp_min":16.92,"temp_max":19.04,"pressure":1016.587,"sea_level":1016.587,"grnd_level":1006.702,"humidity":73,"temp_kf":2.13},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":5.4,"deg":299.273},"sys":{"pod":"n"},"dt_txt":"2019-04-23 00:00:00"},{"dt":1555988400,"main":{"temp":15.43,"temp_min":14.37,"temp_max":15.43,"pressure":1016.154,"sea_level":1016.154,"grnd_level":1005.95,"humidity":81,"temp_kf":1.06},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":3.66,"deg":305.21},"sys":{"pod":"n"},"dt_txt":"2019-04-23 03:00:00"},{"dt":1555999200,"main":{"temp":14.15,"temp_min":14.15,"temp_max":14.15,"pressure":1016.677,"sea_level":1016.677,"grnd_level":1006.136,"humidity":80,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":2.54,"deg":311.637},"sys":{"pod":"n"},"dt_txt":"2019-04-23 06:00:00"},{"dt":1556010000,"main":{"temp":14.71,"temp_min":14.71,"temp_max":14.71,"pressure":1015.993,"sea_level":1015.993,"grnd_level":1005.275,"humidity":80,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":2.88,"deg":325.288},"sys":{"pod":"n"},"dt_txt":"2019-04-23 09:00:00"},{"dt":1556020800,"main":{"temp":14.88,"temp_min":14.88,"temp_max":14.88,"pressure":1015.475,"sea_level":1015.475,"grnd_level":1004.95,"humidity":75,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":1.46,"deg":31.759},"sys":{"pod":"n"},"dt_txt":"2019-04-23 12:00:00"},{"dt":1556031600,"main":{"temp":16.91,"temp_min":16.91,"temp_max":16.91,"pressure":1016.164,"sea_level":1016.164,"grnd_level":1005.751,"humidity":65,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":1.41,"deg":353.458},"sys":{"pod":"d"},"dt_txt":"2019-04-23 15:00:00"},{"dt":1556042400,"main":{"temp":20.48,"temp_min":20.48,"temp_max":20.48,"pressure":1016.938,"sea_level":1016.938,"grnd_level":1006.512,"humidity":51,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":1},"wind":{"speed":3.17,"deg":344.556},"sys":{"pod":"d"},"dt_txt":"2019-04-23 18:00:00"},{"dt":1556053200,"main":{"temp":22.23,"temp_min":22.23,"temp_max":22.23,"pressure":1015.945,"sea_level":1015.945,"grnd_level":1005.576,"humidity":50,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":4},"wind":{"speed":4.38,"deg":313.361},"sys":{"pod":"d"},"dt_txt":"2019-04-23 21:00:00"},{"dt":1556064000,"main":{"temp":19.13,"temp_min":19.13,"temp_max":19.13,"pressure":1014.088,"sea_level":1014.088,"grnd_level":1003.972,"humidity":63,"temp_kf":0},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02n"}],"clouds":{"all":16},"wind":{"speed":4.95,"deg":295.705},"sys":{"pod":"n"},"dt_txt":"2019-04-24 00:00:00"},{"dt":1556074800,"main":{"temp":15.71,"temp_min":15.71,"temp_max":15.71,"pressure":1013.792,"sea_level":1013.792,"grnd_level":1003.607,"humidity":78,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"clouds":{"all":60},"wind":{"speed":3.37,"deg":294.631},"sys":{"pod":"n"},"dt_txt":"2019-04-24 03:00:00"},{"dt":1556085600,"main":{"temp":14.53,"temp_min":14.53,"temp_max":14.53,"pressure":1014.869,"sea_level":1014.869,"grnd_level":1004.595,"humidity":85,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"clouds":{"all":34},"wind":{"speed":2.41,"deg":292.611},"sys":{"pod":"n"},"dt_txt":"2019-04-24 06:00:00"},{"dt":1556096400,"main":{"temp":13.94,"temp_min":13.94,"temp_max":13.94,"pressure":1014.299,"sea_level":1014.299,"grnd_level":1003.894,"humidity":87,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":2.34,"deg":283.167},"sys":{"pod":"n"},"dt_txt":"2019-04-24 09:00:00"},{"dt":1556107200,"main":{"temp":13.49,"temp_min":13.49,"temp_max":13.49,"pressure":1013.691,"sea_level":1013.691,"grnd_level":1003.203,"humidity":90,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":1.62,"deg":293.876},"sys":{"pod":"n"},"dt_txt":"2019-04-24 12:00:00"},{"dt":1556118000,"main":{"temp":15.15,"temp_min":15.15,"temp_max":15.15,"pressure":1014.737,"sea_level":1014.737,"grnd_level":1004.005,"humidity":83,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":0.84,"deg":283.704},"sys":{"pod":"d"},"dt_txt":"2019-04-24 15:00:00"},{"dt":1556128800,"main":{"temp":19.83,"temp_min":19.83,"temp_max":19.83,"pressure":1015.271,"sea_level":1015.271,"grnd_level":1004.51,"humidity":66,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":1.71,"deg":296.64},"sys":{"pod":"d"},"dt_txt":"2019-04-24 18:00:00"},{"dt":1556139600,"main":{"temp":21.45,"temp_min":21.45,"temp_max":21.45,"pressure":1014.123,"sea_level":1014.123,"grnd_level":1003.469,"humidity":62,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":4.21,"deg":291},"sys":{"pod":"d"},"dt_txt":"2019-04-24 21:00:00"},{"dt":1556150400,"main":{"temp":19.06,"temp_min":19.06,"temp_max":19.06,"pressure":1012.241,"sea_level":1012.241,"grnd_level":1001.84,"humidity":72,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":4.8,"deg":296.965},"sys":{"pod":"n"},"dt_txt":"2019-04-25 00:00:00"},{"dt":1556161200,"main":{"temp":15.78,"temp_min":15.78,"temp_max":15.78,"pressure":1012.544,"sea_level":1012.544,"grnd_level":1002.247,"humidity":81,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":3.43,"deg":302.758},"sys":{"pod":"n"},"dt_txt":"2019-04-25 03:00:00"},{"dt":1556172000,"main":{"temp":14.75,"temp_min":14.75,"temp_max":14.75,"pressure":1013.537,"sea_level":1013.537,"grnd_level":1003.321,"humidity":82,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":2.34,"deg":292.571},"sys":{"pod":"n"},"dt_txt":"2019-04-25 06:00:00"},{"dt":1556182800,"main":{"temp":13.87,"temp_min":13.87,"temp_max":13.87,"pressure":1012.894,"sea_level":1012.894,"grnd_level":1002.589,"humidity":84,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":2.32,"deg":276.452},"sys":{"pod":"n"},"dt_txt":"2019-04-25 09:00:00"},{"dt":1556193600,"main":{"temp":13.15,"temp_min":13.15,"temp_max":13.15,"pressure":1012.963,"sea_level":1012.963,"grnd_level":1002.541,"humidity":87,"temp_kf":0},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02n"}],"clouds":{"all":17},"wind":{"speed":1.9,"deg":272.378},"sys":{"pod":"n"},"dt_txt":"2019-04-25 12:00:00"},{"dt":1556204400,"main":{"temp":14.47,"temp_min":14.47,"temp_max":14.47,"pressure":1014.038,"sea_level":1014.038,"grnd_level":1003.476,"humidity":82,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"clouds":{"all":63},"wind":{"speed":1.45,"deg":254.596},"sys":{"pod":"d"},"dt_txt":"2019-04-25 15:00:00"},{"dt":1556215200,"main":{"temp":17.9,"temp_min":17.9,"temp_max":17.9,"pressure":1014.657,"sea_level":1014.657,"grnd_level":1004.269,"humidity":68,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"clouds":{"all":42},"wind":{"speed":2.54,"deg":257.795},"sys":{"pod":"d"},"dt_txt":"2019-04-25 18:00:00"},{"dt":1556226000,"main":{"temp":18.73,"temp_min":18.73,"temp_max":18.73,"pressure":1014.284,"sea_level":1014.284,"grnd_level":1004.055,"humidity":66,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":3.63,"deg":264.464},"sys":{"pod":"d"},"dt_txt":"2019-04-25 21:00:00"},{"dt":1556236800,"main":{"temp":17.41,"temp_min":17.41,"temp_max":17.41,"pressure":1013.489,"sea_level":1013.489,"grnd_level":1003.414,"humidity":70,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":2},"wind":{"speed":3.56,"deg":273.363},"sys":{"pod":"n"},"dt_txt":"2019-04-26 00:00:00"},{"dt":1556247600,"main":{"temp":14.25,"temp_min":14.25,"temp_max":14.25,"pressure":1014.085,"sea_level":1014.085,"grnd_level":1003.895,"humidity":81,"temp_kf":0},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02n"}],"clouds":{"all":12},"wind":{"speed":2.73,"deg":269.937},"sys":{"pod":"n"},"dt_txt":"2019-04-26 03:00:00"},{"dt":1556258400,"main":{"temp":12.82,"temp_min":12.82,"temp_max":12.82,"pressure":1015.189,"sea_level":1015.189,"grnd_level":1005.169,"humidity":86,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":7},"wind":{"speed":1.97,"deg":265.074},"sys":{"pod":"n"},"dt_txt":"2019-04-26 06:00:00"},{"dt":1556269200,"main":{"temp":12.42,"temp_min":12.42,"temp_max":12.42,"pressure":1014.554,"sea_level":1014.554,"grnd_level":1004.4,"humidity":87,"temp_kf":0},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02n"}],"clouds":{"all":19},"wind":{"speed":1.77,"deg":257.727},"sys":{"pod":"n"},"dt_txt":"2019-04-26 09:00:00"},{"dt":1556280000,"main":{"temp":12.15,"temp_min":12.15,"temp_max":12.15,"pressure":1014.38,"sea_level":1014.38,"grnd_level":1004.085,"humidity":87,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"clouds":{"all":30},"wind":{"speed":1.26,"deg":247.16},"sys":{"pod":"n"},"dt_txt":"2019-04-26 12:00:00"},{"dt":1556290800,"main":{"temp":13.95,"temp_min":13.95,"temp_max":13.95,"pressure":1015.402,"sea_level":1015.402,"grnd_level":1005.006,"humidity":79,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"clouds":{"all":56},"wind":{"speed":1.74,"deg":268.75},"sys":{"pod":"d"},"dt_txt":"2019-04-26 15:00:00"},{"dt":1556301600,"main":{"temp":17.37,"temp_min":17.37,"temp_max":17.37,"pressure":1016.189,"sea_level":1016.189,"grnd_level":1005.706,"humidity":66,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"clouds":{"all":69},"wind":{"speed":2.06,"deg":278.903},"sys":{"pod":"d"},"dt_txt":"2019-04-26 18:00:00"},{"dt":1556312400,"main":{"temp":18.86,"temp_min":18.86,"temp_max":18.86,"pressure":1015.579,"sea_level":1015.579,"grnd_level":1005.17,"humidity":61,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"clouds":{"all":97},"wind":{"speed":4.12,"deg":288.602},"sys":{"pod":"d"},"dt_txt":"2019-04-26 21:00:00"},{"dt":1556323200,"main":{"temp":17.61,"temp_min":17.61,"temp_max":17.61,"pressure":1014.681,"sea_level":1014.681,"grnd_level":1004.472,"humidity":65,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"clouds":{"all":98},"wind":{"speed":4.73,"deg":297.351},"sys":{"pod":"n"},"dt_txt":"2019-04-27 00:00:00"},{"dt":1556334000,"main":{"temp":14.59,"temp_min":14.59,"temp_max":14.59,"pressure":1015.186,"sea_level":1015.186,"grnd_level":1004.92,"humidity":74,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"clouds":{"all":77},"wind":{"speed":4.37,"deg":305.864},"sys":{"pod":"n"},"dt_txt":"2019-04-27 03:00:00"},{"dt":1556344800,"main":{"temp":13.46,"temp_min":13.46,"temp_max":13.46,"pressure":1015.852,"sea_level":1015.852,"grnd_level":1005.525,"humidity":78,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"clouds":{"all":49},"wind":{"speed":3.44,"deg":305.416},"sys":{"pod":"n"},"dt_txt":"2019-04-27 06:00:00"},{"dt":1556355600,"main":{"temp":12.59,"temp_min":12.59,"temp_max":12.59,"pressure":1014.772,"sea_level":1014.772,"grnd_level":1004.515,"humidity":82,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":2.65,"deg":295.945},"sys":{"pod":"n"},"dt_txt":"2019-04-27 09:00:00"},{"dt":1556366400,"main":{"temp":11.95,"temp_min":11.95,"temp_max":11.95,"pressure":1014.257,"sea_level":1014.257,"grnd_level":1003.939,"humidity":88,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":2.17,"deg":291.155},"sys":{"pod":"n"},"dt_txt":"2019-04-27 12:00:00"},{"dt":1556377200,"main":{"temp":13.29,"temp_min":13.29,"temp_max":13.29,"pressure":1014.456,"sea_level":1014.456,"grnd_level":1004.014,"humidity":80,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":1.5,"deg":306.388},"sys":{"pod":"d"},"dt_txt":"2019-04-27 15:00:00"}],"city":{"id":5375480,"name":"Mountain View", "unit":"metric","coord":{"lat":37.3894,"lon":-122.0833},"country":"US","population":74066}},
    "formatted": {
        "cod": "200",
        "message": 0.0101,
        "cnt": 40,
        "list": [
            {
                "dt": 1555956000,
                "main": {
                    "temp": 71.55,
                    "temp_min": 61.8,
                    "temp_max": 71.55,
                    "pressure": 1019.575,
                    "sea_level": 1019.575,
                    "grnd_level": 1009.394,
                    "humidity": 65,
                    "temp_kf": 5.42
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03d"
                    }
                ],
                "clouds": {
                    "all": 28
                },
                "wind": {
                    "speed": 7.16,
                    "deg": 330.935
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-04-22 18:00:00"
            },
            {
                "dt": 1555966800,
                "main": {
                    "temp": 73.62,
                    "temp_min": 66.3,
                    "temp_max": 73.62,
                    "pressure": 1018.276,
                    "sea_level": 1018.276,
                    "grnd_level": 1008.239,
                    "humidity": 58,
                    "temp_kf": 4.06
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 11.14,
                    "deg": 302.969
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-04-22 21:00:00"
            },
            {
                "dt": 1555977600,
                "main": {
                    "temp": 67.14,
                    "temp_min": 62.25,
                    "temp_max": 67.14,
                    "pressure": 1016.811,
                    "sea_level": 1016.811,
                    "grnd_level": 1007.028,
                    "humidity": 74,
                    "temp_kf": 2.71
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 11.74,
                    "deg": 296.414
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-04-23 00:00:00"
            },
            {
                "dt": 1555988400,
                "main": {
                    "temp": 59.68,
                    "temp_min": 57.25,
                    "temp_max": 59.68,
                    "pressure": 1016.235,
                    "sea_level": 1016.235,
                    "grnd_level": 1006.065,
                    "humidity": 84,
                    "temp_kf": 1.35
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 7.92,
                    "deg": 301.522
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-04-23 03:00:00"
            },
            {
                "dt": 1555999200,
                "main": {
                    "temp": 56.61,
                    "temp_min": 56.61,
                    "temp_max": 56.61,
                    "pressure": 1016.801,
                    "sea_level": 1016.801,
                    "grnd_level": 1006.336,
                    "humidity": 83,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 5.44,
                    "deg": 302.248
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-04-23 06:00:00"
            },
            {
                "dt": 1556010000,
                "main": {
                    "temp": 56.92,
                    "temp_min": 56.92,
                    "temp_max": 56.92,
                    "pressure": 1016.249,
                    "sea_level": 1016.249,
                    "grnd_level": 1005.603,
                    "humidity": 84,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 5.53,
                    "deg": 320.92
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-04-23 09:00:00"
            },
            {
                "dt": 1556020800,
                "main": {
                    "temp": 57.83,
                    "temp_min": 57.83,
                    "temp_max": 57.83,
                    "pressure": 1015.772,
                    "sea_level": 1015.772,
                    "grnd_level": 1005.239,
                    "humidity": 82,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 2.93,
                    "deg": 42.33
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-04-23 12:00:00"
            },
            {
                "dt": 1556031600,
                "main": {
                    "temp": 61.41,
                    "temp_min": 61.41,
                    "temp_max": 61.41,
                    "pressure": 1016.194,
                    "sea_level": 1016.194,
                    "grnd_level": 1005.781,
                    "humidity": 70,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 2.3,
                    "deg": 346.489
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-04-23 15:00:00"
            },
            {
                "dt": 1556042400,
                "main": {
                    "temp": 68.06,
                    "temp_min": 68.06,
                    "temp_max": 68.06,
                    "pressure": 1016.877,
                    "sea_level": 1016.877,
                    "grnd_level": 1006.494,
                    "humidity": 52,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 2
                },
                "wind": {
                    "speed": 5.7,
                    "deg": 341.281
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-04-23 18:00:00"
            },
            {
                "dt": 1556053200,
                "main": {
                    "temp": 71.15,
                    "temp_min": 71.15,
                    "temp_max": 71.15,
                    "pressure": 1015.724,
                    "sea_level": 1015.724,
                    "grnd_level": 1005.416,
                    "humidity": 50,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 1
                },
                "wind": {
                    "speed": 10.09,
                    "deg": 306.123
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-04-23 21:00:00"
            },
            {
                "dt": 1556064000,
                "main": {
                    "temp": 66.32,
                    "temp_min": 66.32,
                    "temp_max": 66.32,
                    "pressure": 1014.199,
                    "sea_level": 1014.199,
                    "grnd_level": 1004.068,
                    "humidity": 62,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02n"
                    }
                ],
                "clouds": {
                    "all": 14
                },
                "wind": {
                    "speed": 10.51,
                    "deg": 294.789
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-04-24 00:00:00"
            },
            {
                "dt": 1556074800,
                "main": {
                    "temp": 59.6,
                    "temp_min": 59.6,
                    "temp_max": 59.6,
                    "pressure": 1013.82,
                    "sea_level": 1013.82,
                    "grnd_level": 1003.589,
                    "humidity": 80,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 59
                },
                "wind": {
                    "speed": 8.12,
                    "deg": 298.295
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-04-24 03:00:00"
            },
            {
                "dt": 1556085600,
                "main": {
                    "temp": 57.62,
                    "temp_min": 57.62,
                    "temp_max": 57.62,
                    "pressure": 1014.74,
                    "sea_level": 1014.74,
                    "grnd_level": 1004.508,
                    "humidity": 86,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03n"
                    }
                ],
                "clouds": {
                    "all": 47
                },
                "wind": {
                    "speed": 5.39,
                    "deg": 293.617
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-04-24 06:00:00"
            },
            {
                "dt": 1556096400,
                "main": {
                    "temp": 56.91,
                    "temp_min": 56.91,
                    "temp_max": 56.91,
                    "pressure": 1014.261,
                    "sea_level": 1014.261,
                    "grnd_level": 1003.819,
                    "humidity": 88,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 4.9,
                    "deg": 284.119
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-04-24 09:00:00"
            },
            {
                "dt": 1556107200,
                "main": {
                    "temp": 56.11,
                    "temp_min": 56.11,
                    "temp_max": 56.11,
                    "pressure": 1013.495,
                    "sea_level": 1013.495,
                    "grnd_level": 1003.023,
                    "humidity": 91,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 2.68,
                    "deg": 299.947
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-04-24 12:00:00"
            },
            {
                "dt": 1556118000,
                "main": {
                    "temp": 59.65,
                    "temp_min": 59.65,
                    "temp_max": 59.65,
                    "pressure": 1014.428,
                    "sea_level": 1014.428,
                    "grnd_level": 1003.814,
                    "humidity": 82,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 1.32,
                    "deg": 282.466
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-04-24 15:00:00"
            },
            {
                "dt": 1556128800,
                "main": {
                    "temp": 67.56,
                    "temp_min": 67.56,
                    "temp_max": 67.56,
                    "pressure": 1015.053,
                    "sea_level": 1015.053,
                    "grnd_level": 1004.403,
                    "humidity": 65,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 4.97,
                    "deg": 300.428
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-04-24 18:00:00"
            },
            {
                "dt": 1556139600,
                "main": {
                    "temp": 69.97,
                    "temp_min": 69.97,
                    "temp_max": 69.97,
                    "pressure": 1014.165,
                    "sea_level": 1014.165,
                    "grnd_level": 1003.64,
                    "humidity": 63,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 9.8,
                    "deg": 292.562
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-04-24 21:00:00"
            },
            {
                "dt": 1556150400,
                "main": {
                    "temp": 66.36,
                    "temp_min": 66.36,
                    "temp_max": 66.36,
                    "pressure": 1012.336,
                    "sea_level": 1012.336,
                    "grnd_level": 1001.984,
                    "humidity": 71,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 10.09,
                    "deg": 294.294
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-04-25 00:00:00"
            },
            {
                "dt": 1556161200,
                "main": {
                    "temp": 60.21,
                    "temp_min": 60.21,
                    "temp_max": 60.21,
                    "pressure": 1012.555,
                    "sea_level": 1012.555,
                    "grnd_level": 1002.246,
                    "humidity": 81,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 7.2,
                    "deg": 298.808
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-04-25 03:00:00"
            },
            {
                "dt": 1556172000,
                "main": {
                    "temp": 58.3,
                    "temp_min": 58.3,
                    "temp_max": 58.3,
                    "pressure": 1013.587,
                    "sea_level": 1013.587,
                    "grnd_level": 1003.33,
                    "humidity": 82,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 5.39,
                    "deg": 287.885
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-04-25 06:00:00"
            },
            {
                "dt": 1556182800,
                "main": {
                    "temp": 56.89,
                    "temp_min": 56.89,
                    "temp_max": 56.89,
                    "pressure": 1012.944,
                    "sea_level": 1012.944,
                    "grnd_level": 1002.65,
                    "humidity": 83,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 4.9,
                    "deg": 273.088
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-04-25 09:00:00"
            },
            {
                "dt": 1556193600,
                "main": {
                    "temp": 55.75,
                    "temp_min": 55.75,
                    "temp_max": 55.75,
                    "pressure": 1012.879,
                    "sea_level": 1012.879,
                    "grnd_level": 1002.454,
                    "humidity": 86,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 3.94,
                    "deg": 266.974
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-04-25 12:00:00"
            },
            {
                "dt": 1556204400,
                "main": {
                    "temp": 58.04,
                    "temp_min": 58.04,
                    "temp_max": 58.04,
                    "pressure": 1014.045,
                    "sea_level": 1014.045,
                    "grnd_level": 1003.526,
                    "humidity": 81,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 3.11,
                    "deg": 253.93
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-04-25 15:00:00"
            },
            {
                "dt": 1556215200,
                "main": {
                    "temp": 64.9,
                    "temp_min": 64.9,
                    "temp_max": 64.9,
                    "pressure": 1014.683,
                    "sea_level": 1014.683,
                    "grnd_level": 1004.207,
                    "humidity": 66,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 5.37,
                    "deg": 246.61
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-04-25 18:00:00"
            },
            {
                "dt": 1556226000,
                "main": {
                    "temp": 66.5,
                    "temp_min": 66.5,
                    "temp_max": 66.5,
                    "pressure": 1014.336,
                    "sea_level": 1014.336,
                    "grnd_level": 1004.165,
                    "humidity": 63,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 7.67,
                    "deg": 257.944
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-04-25 21:00:00"
            },
            {
                "dt": 1556236800,
                "main": {
                    "temp": 64.85,
                    "temp_min": 64.85,
                    "temp_max": 64.85,
                    "pressure": 1013.424,
                    "sea_level": 1013.424,
                    "grnd_level": 1003.281,
                    "humidity": 66,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 7,
                    "deg": 258.812
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-04-26 00:00:00"
            },
            {
                "dt": 1556247600,
                "main": {
                    "temp": 58.21,
                    "temp_min": 58.21,
                    "temp_max": 58.21,
                    "pressure": 1014.117,
                    "sea_level": 1014.117,
                    "grnd_level": 1004.114,
                    "humidity": 79,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 10
                },
                "wind": {
                    "speed": 5.91,
                    "deg": 268.547
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-04-26 03:00:00"
            },
            {
                "dt": 1556258400,
                "main": {
                    "temp": 56.48,
                    "temp_min": 56.48,
                    "temp_max": 56.48,
                    "pressure": 1015.204,
                    "sea_level": 1015.204,
                    "grnd_level": 1005.271,
                    "humidity": 82,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 8
                },
                "wind": {
                    "speed": 3.6,
                    "deg": 245.009
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-04-26 06:00:00"
            },
            {
                "dt": 1556269200,
                "main": {
                    "temp": 55.31,
                    "temp_min": 55.31,
                    "temp_max": 55.31,
                    "pressure": 1014.603,
                    "sea_level": 1014.603,
                    "grnd_level": 1004.435,
                    "humidity": 83,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03n"
                    }
                ],
                "clouds": {
                    "all": 36
                },
                "wind": {
                    "speed": 2.75,
                    "deg": 236.05
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-04-26 09:00:00"
            },
            {
                "dt": 1556280000,
                "main": {
                    "temp": 55.24,
                    "temp_min": 55.24,
                    "temp_max": 55.24,
                    "pressure": 1014.226,
                    "sea_level": 1014.226,
                    "grnd_level": 1003.959,
                    "humidity": 81,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03n"
                    }
                ],
                "clouds": {
                    "all": 45
                },
                "wind": {
                    "speed": 3.02,
                    "deg": 214.16
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-04-26 12:00:00"
            },
            {
                "dt": 1556290800,
                "main": {
                    "temp": 58.52,
                    "temp_min": 58.52,
                    "temp_max": 58.52,
                    "pressure": 1015.236,
                    "sea_level": 1015.236,
                    "grnd_level": 1004.857,
                    "humidity": 73,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 73
                },
                "wind": {
                    "speed": 2.57,
                    "deg": 226.337
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-04-26 15:00:00"
            },
            {
                "dt": 1556301600,
                "main": {
                    "temp": 64.96,
                    "temp_min": 64.96,
                    "temp_max": 64.96,
                    "pressure": 1016.034,
                    "sea_level": 1016.034,
                    "grnd_level": 1005.753,
                    "humidity": 60,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 82
                },
                "wind": {
                    "speed": 3.65,
                    "deg": 251.755
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-04-26 18:00:00"
            },
            {
                "dt": 1556312400,
                "main": {
                    "temp": 68.74,
                    "temp_min": 68.74,
                    "temp_max": 68.74,
                    "pressure": 1015.29,
                    "sea_level": 1015.29,
                    "grnd_level": 1004.935,
                    "humidity": 52,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 83
                },
                "wind": {
                    "speed": 6.53,
                    "deg": 253.971
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-04-26 21:00:00"
            },
            {
                "dt": 1556323200,
                "main": {
                    "temp": 64.78,
                    "temp_min": 64.78,
                    "temp_max": 64.78,
                    "pressure": 1014.307,
                    "sea_level": 1014.307,
                    "grnd_level": 1004.201,
                    "humidity": 63,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 85
                },
                "wind": {
                    "speed": 8.75,
                    "deg": 274.48
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-04-27 00:00:00"
            },
            {
                "dt": 1556334000,
                "main": {
                    "temp": 58.72,
                    "temp_min": 58.72,
                    "temp_max": 58.72,
                    "pressure": 1014.599,
                    "sea_level": 1014.599,
                    "grnd_level": 1004.485,
                    "humidity": 75,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 60
                },
                "wind": {
                    "speed": 4.16,
                    "deg": 281.376
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-04-27 03:00:00"
            },
            {
                "dt": 1556344800,
                "main": {
                    "temp": 57.08,
                    "temp_min": 57.08,
                    "temp_max": 57.08,
                    "pressure": 1015.391,
                    "sea_level": 1015.391,
                    "grnd_level": 1005.057,
                    "humidity": 77,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03n"
                    }
                ],
                "clouds": {
                    "all": 33
                },
                "wind": {
                    "speed": 3.91,
                    "deg": 261.563
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-04-27 06:00:00"
            },
            {
                "dt": 1556355600,
                "main": {
                    "temp": 56.03,
                    "temp_min": 56.03,
                    "temp_max": 56.03,
                    "pressure": 1014.393,
                    "sea_level": 1014.393,
                    "grnd_level": 1004.038,
                    "humidity": 80,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 3.47,
                    "deg": 244.46
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-04-27 09:00:00"
            },
            {
                "dt": 1556366400,
                "main": {
                    "temp": 55.02,
                    "temp_min": 55.02,
                    "temp_max": 55.02,
                    "pressure": 1013.792,
                    "sea_level": 1013.792,
                    "grnd_level": 1003.496,
                    "humidity": 83,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 4.34,
                    "deg": 267.817
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-04-27 12:00:00"
            },
            {
                "dt": 1556377200,
                "main": {
                    "temp": 57.03,
                    "temp_min": 57.03,
                    "temp_max": 57.03,
                    "pressure": 1014.277,
                    "sea_level": 1014.277,
                    "grnd_level": 1003.825,
                    "humidity": 80,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 3.29,
                    "deg": 271.017
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-04-27 15:00:00"
            }
        ],
        "city": {
            "id": 5375480,
            "name": "Mountain View",
            "unit": "imperial",
            "coord": {
                "lat": 37.3894,
                "lon": -122.0833
            },
            "country": "US",
            "population": 74066
        }
    }
};

export default WeatherResultsMock;
