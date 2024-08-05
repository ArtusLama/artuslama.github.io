import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        primary: "#31DF8B",


        bgColor: "#101010",
 
        // Based on #F2F2F2 with different opacities
        background: "#F2F2F20D", // => 5%
        lightBackground: "#F2F2F21A", // => 10%

        // Based on #F2F2F2 with different opacities
        borderNormal: "#F2F2F21A", // => 10%
        borderLight: "#F2F2F226", // => 15%

        

        // 🚧 - NOT FINAL - 🚧
        lightText: "#F2F2F2",
        normalText: "#F2F2F2", 
        // - - - - - - - - - -
      },
    },
    fontFamily: {
      sans: ['"Plus Jakarta Sans"', ...fontFamily.sans],
    }
  }
}