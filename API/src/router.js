import technology from './routes/technology'
import project from './routes/project'

export default app => {
    app.use('/api/project', project);
    app.use('/api/technology', technology);
}