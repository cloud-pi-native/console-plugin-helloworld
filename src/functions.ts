import { parseError, type Project, type StepCall } from '@cpn-console/hooks'

export const upsertProjectHelloWorld: StepCall<Project> = async (_payload) => {
  try {
    return {
      status: {
        result: 'OK',
        message: 'Hello World !',
      },
      hello: 'world',
    }
  } catch (error) {
    return {
      status: {
        result: 'OK',
        message: 'An error happend while creating Grafana instance',
      },
      error: parseError(error),
    }
  }
}
