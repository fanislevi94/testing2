import { useState, useEffect } from "react";
class api {
  public static async post(data: any, endpoint: string) {
    const JSONdata = JSON.stringify(data);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };
    const response = await fetch(endpoint, options);
    const result = await response.json();
    return result;
  }
  public static async put(data: any, endpoint: string) {
    const JSONdata = JSON.stringify(data);
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };
    const response = await fetch(endpoint, options);
    const result = await response.json();
    return result;
  }

  public static async get(url: any) {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);
    return json;
  }

  public static async delete(data: any, endpoint: string) {
    const JSONdata = JSON.stringify(data);
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint + "?name=" + data.name, options);
    const result = await response.json();
    return result;
    //alert(`Is this your full name: ${result.user.email}`)
  }
}
export default api;
