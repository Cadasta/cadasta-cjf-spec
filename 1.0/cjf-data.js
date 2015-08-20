{
  version: 1.0,
  cadasta_user_id: "123456", //cadasta/CKAN user ID
  operation: "create", //create, update, delete
  survey_id: 125582, //The internal survey ID - survey must have been loaded into the system first
  project_id: 14, //The internal project ID - which project will this data get shipped to?
  data: [
    {
      "_geolocation": {"type": "Point", "coordinates": [-122.387855, 47.670367]},
      "key1": "value1",
      "key2": "value2",
      "key3": "value3"
    },
    {
      "_geolocation": {"type": "Point", "coordinates": [-120.387855, 45.670367]},
      "key1": "value1",
      "key2": "value2",
      "key3": "value3"
    }]
}