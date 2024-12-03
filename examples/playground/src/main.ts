import { createApp } from "chibivue";
import { h } from "../../../packages/runtime-core";

const app = createApp({
  render() {
    return h("div", {}, [
      h("p", {}, ["Hello, world."]),
      h("button", {
        onClick() {
          alert("hello world")
        }
      }, ["click"])
    ])
  },
})

app.mount("#app")
