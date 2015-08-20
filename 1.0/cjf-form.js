{
  version: 1.0,
  cadasta_user_id: "123456", //cadasta/CKAN user ID
  operation: "create", //create, update, delete
  survey_id: 125582, //The internal survey ID - survey must have been loaded into the system first
  project_id: 14, //The internal project ID - which project will this data get shipped to?
  form: { //Form description
    "name": "Basic-survey-prototype",
    "title": "Basic Cadasta Survey Prototype",
    "sms_keyword": "Basic-survey-prototype",
    "default_language": "default",
    "version": "201507162126",
    "id_string": "Basic-survey-prototype",
    "type": "survey",
    "children": [ //Survey questions/columns/properties
      {
        "bind": {
          "relevant": "selected(${loan}, 'yes')"
        }
        ,
        "label": "Loan Group",
        "type": "group",
        "children": [
          {"type": "text", "name": "key1", "label": "Name of Bank with Loan"}
        ],
        "name": "key2"
      }
    ],
    "name": "key3"
  }
}