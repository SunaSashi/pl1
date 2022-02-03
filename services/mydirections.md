# My personal directions request

First, explore the various options through the Directions API https://developers.google.com/maps/documentation/directions/get-directions. 

Be creative and use multiple parameters from the API documentation to earn a top grade. The rubric is listed in the bottom of the MarkDown document. 

> Tip: Can't make changes? GitHub previews MD documents by default (read-only). Start editing to make the changes for your URL and JSON response below

## Directions URL 
```
https://maps.googleapis.com/maps/api/directions/json?departure_time=now&destination=place_id%3AChIJx31rGKJoUjoR2_i4-OMdm14&origin=place_id%3AChIJM-WyVNJnUjoRidu8sHTZJ8s&waypoints=place_id%3AChIJQTEBK-tnUjoRFJ900eUBOaQ%7Cvia%3Aplace_id%3AChIJH7hVUn9oUjoR3pS3Si7dSKE&&mode=driving&traffic_model=optimistic&region=in&units=metric&key=AIzaSyDv3MGflguusDaLmV_-BUlmuoUI4EbM88w
```

## Next paste the full JSON response to this query here:

{
   "geocoded_waypoints" : [
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJM-WyVNJnUjoRidu8sHTZJ8s",
         "types" : [
            "establishment",
            "hindu_temple",
            "place_of_worship",
            "point_of_interest"
         ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJQTEBK-tnUjoRFJ900eUBOaQ",
         "types" : [ "cafe", "establishment", "food", "point_of_interest", "store" ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJH7hVUn9oUjoR3pS3Si7dSKE",
         "types" : [
            "church",
            "establishment",
            "place_of_worship",
            "point_of_interest",
            "tourist_attraction"
         ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJx31rGKJoUjoR2_i4-OMdm14",
         "types" : [ "establishment", "point_of_interest", "transit_station" ]
      }
   ],
   "routes" : [
      {
         "bounds" : {
            "northeast" : {
               "lat" : 13.0604277,
               "lng" : 80.28262359999999
            },
            "southwest" : {
               "lat" : 13.0333461,
               "lng" : 80.2702707
            }
         },
         "copyrights" : "Map data ©2022",
         "legs" : [
            {
               "distance" : {
                  "text" : "79 m",
                  "value" : 79
               },
               "duration" : {
                  "text" : "1 min",
                  "value" : 36
               },
               "end_address" : "N Mada St, Vinayaka Nagar Colony, Mylapore, Chennai, Tamil Nadu 600004, India",
               "end_location" : {
                  "lat" : 13.0341461,
                  "lng" : 80.27030999999999
               },
               "start_address" : "234, Ramakrishna Mutt Rd, Vinayaka Nagar Colony, Mylapore, Chennai, Tamil Nadu 600004, India",
               "start_location" : {
                  "lat" : 13.0335372,
                  "lng" : 80.2702707
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "67 m",
                        "value" : 67
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 24
                     },
                     "end_location" : {
                        "lat" : 13.03412,
                        "lng" : 80.2704222
                     },
                     "html_instructions" : "Head \u003cb\u003enorth\u003c/b\u003e on \u003cb\u003ePonnambala Vadhyar St\u003c/b\u003e toward \u003cb\u003eN Mada St\u003c/b\u003e",
                     "polyline" : {
                        "points" : "srpnAex|hNGCkBY"
                     },
                     "start_location" : {
                        "lat" : 13.0335372,
                        "lng" : 80.2702707
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "12 m",
                        "value" : 12
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 12
                     },
                     "end_location" : {
                        "lat" : 13.0341461,
                        "lng" : 80.27030999999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e at B.L.T. STORES onto \u003cb\u003eN Mada St\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eDestination will be on the left\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "gvpnAcy|hNCLAF"
                     },
                     "start_location" : {
                        "lat" : 13.03412,
                        "lng" : 80.2704222
                     },
                     "travel_mode" : "DRIVING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            },
            {
               "distance" : {
                  "text" : "4.1 km",
                  "value" : 4084
               },
               "duration" : {
                  "text" : "11 mins",
                  "value" : 668
               },
               "end_address" : "Marina Beach, Kamarajar Promenade, PWD Estate, Marina Beach, Triplicane, Chennai, Tamil Nadu 600005, India",
               "end_location" : {
                  "lat" : 13.0604277,
                  "lng" : 80.28262359999999
               },
               "start_address" : "N Mada St, Vinayaka Nagar Colony, Mylapore, Chennai, Tamil Nadu 600004, India",
               "start_location" : {
                  "lat" : 13.0341461,
                  "lng" : 80.27030999999999
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "5 m",
                        "value" : 5
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 2
                     },
                     "end_location" : {
                        "lat" : 13.034137,
                        "lng" : 80.27035070000001
                     },
                     "html_instructions" : "Head \u003cb\u003eeast\u003c/b\u003e on \u003cb\u003eN Mada St\u003c/b\u003e toward \u003cb\u003eChengalneer Pillaiyar Koil St\u003c/b\u003e",
                     "polyline" : {
                        "points" : "mvpnAmx|hN@G"
                     },
                     "start_location" : {
                        "lat" : 13.0341461,
                        "lng" : 80.27030999999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 114
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 47
                     },
                     "end_location" : {
                        "lat" : 13.0351139,
                        "lng" : 80.27067169999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e after Adarsh Jewellery (on the left)",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "kvpnAux|hNwCq@YIOC"
                     },
                     "start_location" : {
                        "lat" : 13.034137,
                        "lng" : 80.27035070000001
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.7 km",
                        "value" : 748
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 146
                     },
                     "end_location" : {
                        "lat" : 13.0334757,
                        "lng" : 80.2773529
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eKutchery Rd\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Roots Dentistry Unlimited (on the right in 400&nbsp;m)\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "m|pnAuz|hNBEBEBIDORu@FUFUDWJgALsAFk@DUNo@He@f@iCd@gDFa@Ju@Hi@^oCVgBRsANcB"
                     },
                     "start_location" : {
                        "lat" : 13.0351139,
                        "lng" : 80.27067169999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "77 m",
                        "value" : 77
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 46
                     },
                     "end_location" : {
                        "lat" : 13.0333461,
                        "lng" : 80.2780477
                     },
                     "html_instructions" : "Continue straight onto \u003cb\u003eRosary Church Road\u003c/b\u003e",
                     "maneuver" : "straight",
                     "polyline" : {
                        "points" : "grpnAmd~hNV}B@M"
                     },
                     "start_location" : {
                        "lat" : 13.0334757,
                        "lng" : 80.2773529
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "47 m",
                        "value" : 47
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 9
                     },
                     "end_location" : {
                        "lat" : 13.0337587,
                        "lng" : 80.27813739999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e toward \u003cb\u003eRaja Street\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "mqpnAyh~hNqAQ"
                     },
                     "start_location" : {
                        "lat" : 13.0333461,
                        "lng" : 80.2780477
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "81 m",
                        "value" : 81
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 34
                     },
                     "end_location" : {
                        "lat" : 13.0339322,
                        "lng" : 80.2774132
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eRaja Street\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "_tpnAki~hNa@pC"
                     },
                     "start_location" : {
                        "lat" : 13.0337587,
                        "lng" : 80.27813739999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.1 km",
                        "value" : 1066
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 148
                     },
                     "end_location" : {
                        "lat" : 13.0432518,
                        "lng" : 80.27960329999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eKamarajar Salai\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eSanthome High Rd\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow Kamarajar Salai\u003c/div\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by TAMIL NADU Police Head Quarters (on the left in 1.0&nbsp;km)\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "aupnAyd~hNCA_BYIAA?S@sAM_BSC?eBOy@Ma@IEAOC]KA?SGa@Ma@MKEWGUAWECAo@IkAU_AQq@Qy@S]Ga@IGAeASyAUkB_@OCwGo@aEW"
                     },
                     "start_location" : {
                        "lat" : 13.0339322,
                        "lng" : 80.2774132
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.9 km",
                        "value" : 1946
                     },
                     "duration" : {
                        "text" : "4 mins",
                        "value" : 236
                     },
                     "end_location" : {
                        "lat" : 13.0604277,
                        "lng" : 80.28262359999999
                     },
                     "html_instructions" : "At the roundabout, continue straight onto \u003cb\u003eKamarajar Promenade\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Kannagi Statue (on the right in 1.6&nbsp;km)\u003c/div\u003e\u003cdiv style=\"font-size:0.9em\"\u003eDestination will be on the right\u003c/div\u003e",
                     "maneuver" : "roundabout-left",
                     "polyline" : {
                        "points" : "iornAor~hNC@CBE@A?A?A?A?A?AAA?A??AA??AA?AA?AA??AAA?A?AsDe@eAIMCCAEEeHg@kAKoGe@K?iAK_DUs@GMAmAKeBMgAIk@EmDa@}@CaCWKAWCa@Cc@E]CEAc@Ea@CAAa@Ec@G_@EA?c@Gc@GKAUCc@Ea@EMAUCa@Ec@GWCc@Gc@Ga@Gc@Gc@Gc@Ga@Gc@GQCc@Ec@Ga@Ec@GQCwC]kBU_D_@"
                     },
                     "start_location" : {
                        "lat" : 13.0432518,
                        "lng" : 80.27960329999999
                     },
                     "travel_mode" : "DRIVING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : [
                  {
                     "location" : {
                        "lat" : 13.0339082,
                        "lng" : 80.27751359999999
                     },
                     "step_index" : 5,
                     "step_interpolation" : 0.861388623714447
                  }
               ]
            }
         ],
         "overview_polyline" : {
            "points" : "srpnAex|hNsB]ET@GwCq@i@MPe@h@yBX{CLaAXuAf@iCd@gDRwAh@yDj@{Df@aF@MqAQe@nCiB[U@sDa@iBOqB]uAa@m@Sm@IwCg@iE_AiEu@{Bc@wGo@aEWGDG@C?IAEECIsDe@sAMIGqJs@eOgAuFc@sBOmDa@}@CmCYy@GkBQiBSqEg@kFo@kGy@{NeB"
         },
         "summary" : "Ponnambala Vadhyar St",
         "warnings" : [],
         "waypoint_order" : []
      }
   ],
   "status" : "OK"
}
____
## Rubric

This is part of your first practical lab in Week 3 

1. A working URL properly documented in the MarkDown with a unique origin and destination earns 50%
2. Including one to four additional functioning unique parameters from the API earns 50-70%
3. Having 3 or more functioning unique/novel and well-thought out parameters from the API earns 70-90%
4. Including more than 2 "stops", including links to display PlaceIDs on Google Maps, or other innovative presentations earns 80%-100%. 
