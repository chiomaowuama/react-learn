import { CreateContext, useContext } from "react"

export const ThemeContext = CreateContext({
    thememode:  "light",
    darkTheme:() => {},
    lightTheme:() => {},
})
export const ThemeProvider = ThemeContext.provider;