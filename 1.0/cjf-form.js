{
  "version": 1.0,
  "project_id": "273", // Cadasta project id
  "form": {
    "name": "ZTwMPxel06tp04LOBUns341T",
    "formid": 373, // ONA formid
    "title": "CJF Minimum",
    "sms_keyword": "escape",
    "default_language": "default",
    "id_string": "CJF-minimum",  // Cadasta & ONA field data unique id_string
    "type": "survey",
    // Survey questions/columns/properties
    "children": [
      {
        "type": "note",
        "name": "title",
        "label": "Cadasta CJF Minimum – September 2015"
      },
      {
        "choices": [
          {
            "name": "katechapman",
            "label": "Kate Chapman"
          },
          {
            "name": "frankpichel",
            "label": "Frank Pichel"
          }
        ],
        "type": "select one",
        "name": "surveyor",
        "label": "Name of Surveyor"
      },
      {
        "type": "select one",
        "name": "party_type", // required: https://github.com/Cadasta/cadasta-data-transformer/blob/master/src/controllers/validateform.js#L16
        "label": "Party classification",
        "choices": [
          {
            "name": "group",
            "label": "Group"
          },
          {
            "name": "individual",
            "label": "Individual"
          }
        ]
      },
      {
        "bind": {
          "relevant": "${party_type}='individual'"
        },
        "type": "text",
        "name": "applicant_name_full", // required: https://github.com/Cadasta/cadasta-data-transformer/blob/master/src/controllers/validateform.js#L11
        "label": "Applicant Full Name"
      },
      {
        "bind": {
          "relevant": "${party_type}='group'"
        },
        "type": "text",
        "name": "applicant_name_group", // required: https://github.com/Cadasta/cadasta-data-transformer/blob/master/src/controllers/validateform.js#L12
        "label": "Applicant Group Name"
      },
      {
        "type": "geopoint",
        "name": "geo_location", // required: https://github.com/Cadasta/cadasta-data-transformer/blob/master/src/controllers/validateform.js#L15
        "label": "Location of Parcel"
      },
      {
        "type": "dateTime",
        "name": "date_land_possession", //required https://github.com/Cadasta/cadasta-data-transformer/blob/master/src/controllers/validateform.js#L15
        "label": "DateTime of Land Possesion"
      },
      {
        "type": "text",
        "name": "means_of_acquire", // required https://github.com/Cadasta/cadasta-data-transformer/blob/master/src/controllers/validateform.js#L15
        "label": "Describe how did you acquired the land?"
      },
      // tenure type list: https://github.com/Cadasta/cadasta-db/blob/dev/sql/1_db.sql#L175
      {
        "type": "select one",
        "name": "tenure_type", // required: https://github.com/Cadasta/cadasta-data-transformer/blob/master/src/controllers/validateform.js#L10
        "label": "What is the Social Tenure Type?",
        "choices": [ // https://github.com/Cadasta/cadasta-db/blob/dev/sql/3_db-functions.sql#L604
          {
            "name": "indigenous_land_rights",
            "label": "Indigenous land rights"
          },
          {
            "name": "joint_tenancy",
            "label": "Joint tenancy"
          },
          {
            "name": "tenancy_in_common",
            "label": "Tenancy in common"
          },
          {
            "name": "undivided_co_ownership",
            "label": "Undivided co-ownership (general term covering strata title and condominiums)"
          },
          {
            "name": "easment",
            "label": "Easement"
          },
          {
            "name": "equitable_servitude",
            "label": "Equitable servitude"
          },
          {
            "name": "mineral_rights",
            "label": "Mineral rights (includes oil & gas)"
          },
          {
            "name": "water_rights",
            "label": "Water rights (collective term for bundle of rights possible)"
          },
          {
            "name": "concessionary_rights",
            "label": "Concessionary rights (non-mineral)"
          },
          {
            "name": "carbon_rights",
            "label": "Carbon rights"
          },
          {
            "name": "freehold",
            "label": "Freehold"
          },
          {
            "name": "long_term_leasehold",
            "label": "Long term leasehold (10+ years)"
          },
          {
            "name": "leasehold",
            "label": "Leasehold"
          },
          {
            "name": "customary_rights",
            "label": "Customary Rights"
          },
          {
            "name": "occupancy",
            "label": "Occupancy (no documented rights)"
          },
          {
            "name": "tenancy",
            "label": "Tenancy (documented sub-lease)"
          },
          {
            "name": "hunting_fishing_harvest_rights",
            "label": "Hunting/Fishing/Harvest Rights"
          },
          {
            "name": "grazing_rights",
            "label": "Grazing Rights"
          }
        ]
      },
      {
        "control": {
          "bodyless": true
        },
        "type": "group",
        "name": "meta",
        "children": [
          {
            "bind": {
              "readonly": "true()",
              "calculate": "concat('uuid:', uuid())"
            },
            "type": "calculate",
            "name": "instanceID"
          }
        ]
      }
    ]
  }
}