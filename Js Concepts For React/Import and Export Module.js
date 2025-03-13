// Components -> A, B, C,
 function ComponentA() {
    return "Something"
 }

 // first type of export
 export default ComponentA

 // second type of export
 export const ComponentB = () => {

 }

 //importing types
 import ComponentA from "path";
 import {ComponentB} from "path"