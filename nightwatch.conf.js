module.exports = {
  "src_folders" : ["e2e/test"],
  "output_folder" : "reports",
  "custom_commands_path" : "",
  "custom_assertions_path" : "",
  "page_objects_path" : "./e2e/page-object/",
  "globals_path" : "",

  "selenium" : {
    "start_process" : false,
    "server_path" : "../selenium-server-standalone-2.53.1.jar",
    "log_path" : "",
    "port" : 4444,
    "cli_args" : {
      "webdriver.chrome.driver" : "/usr/local/bin/chromedriver",
      "webdriver.gecko.driver" : "/usr/local/bin//geckodriver",
      "webdriver.edge.driver" : ""
    }
  },

  "test_settings" : {
    "default" : {
      "launch_url" : "http://localhost",
      "selenium_port"  : 4444,
      "selenium_host"  : "localhost",
      "silent": true,
      "screenshots" : {
        "enabled" : false,
        "path" : ""
      },

      "desiredCapabilities": {
        "browserName": "chrome"
      }
    },

    "chrome" : {
      "desiredCapabilities": {
        "browserName": "chrome",
        "javascriptEnabled": true
      }
    },

    "edge" : {
      "desiredCapabilities": {
        "browserName": "MicrosoftEdge"
      }
    }
  }
}