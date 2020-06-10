import { Application } from 'probot' // eslint-disable-line no-unused-vars

export = (app: Application) => {
  app.on('repository.created', async (context) => {
    const issue = context.issue({
      title: 'Hello World!',
      body: 'You created this GitHub repository so I am here to celebrate! :tada:'
    })
    setTimeout(async () => {
      await context.github.issues.create(issue)
    }, 3000) // or retry when issues.create fails
  })
}
