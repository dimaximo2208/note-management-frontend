
type EnvType = {
    REACT_APP_ENVIRONMENT: string,
    REACT_APP_API_URL: string,
}

//@ts-ignore
export const env: EnvType = { ...process.env, ...window.env }