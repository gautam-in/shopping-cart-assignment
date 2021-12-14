module.exports = {
        presets: [
          [
            "@babel/preset-env"
          ],
          [
              "@babel/preset-react" , {
                    runtime : "automatic"
              }
          ]
        ],
        plugins : 
        [
          "react-refresh/babel"
        ]
}