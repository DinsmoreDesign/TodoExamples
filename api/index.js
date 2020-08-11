import { Server, Model } from 'miragejs';

const getDateString = () => {

    const now = new Date();
    
    return now.toISOString();

};

export default ({ environment = 'development' } = {}) => {

    return new Server({

        environment,
        models: {

            task: Model

        },
        routes() {

            this.namespace = 'api';

            this.get('/tasks');

            this.del('/task/:id', (schema, request) => {

                const id = request.params.id;

                return schema.tasks.find(id).destroy();

            });

            this.get('/task/:id', (schema, request) => {

                const id = request.params.id;
              
                return schema.tasks.find(id);

            });

            this.put('/task/:id', (schema, request) => {

                const newAttrs = JSON.parse(request.requestBody);
                const id = request.params.id;
                const task = schema.tasks.find(id);
              
                return task.update(newAttrs);

            });

            this.post('/task', (schema, request) => {

                const attrs = JSON.parse(request.requestBody);

                return schema.tasks.create({
                    ...attrs,
                    created: getDateString(),
                    done: false
                });

            });

        },
        seeds(server) {

            server.create('task', {
                title: 'My first task',
                description: 'Made today!',
                created: getDateString(),
                done: false
            });

        }

    });

};