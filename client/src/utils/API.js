import axios from "axios";

export default {
  // Gets all examples
  getExamples: function() {
    return axios.get("/api/example");
  },
  // Gets the example with the given id
  getExample: function(id) {
    return axios.get(`/api/example/${id}` );
  },
 
  // Saves an example to the database
  saveExample: function(exampleData) {
    return axios.post("/api/example", exampleData);
  }
};
