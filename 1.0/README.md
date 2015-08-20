Cadasta Common JSON Format Spec
=========

The CJF Spec defines the JSON structure that incoming datasets must be parsed into in order to be loaded into the Cadasta Database.
The Spec should be used when creating a new provider for the Cadasta Ingestion Engine.

There are 2 parts to the specification:

1) The form definition - this specifies (at a minimum) what the fields are, what each of their datatypes are
2) The data - an array of objects - each object is like a row in a spreadsheet.  The object consists of key/value pairs that define the column name and the value of the cell.

This version of the CJF borrows heavily from the FormHub JSON API Format, since it does a good job of describing complex nested surveys as well as simple spreadsheet-style datasets.


