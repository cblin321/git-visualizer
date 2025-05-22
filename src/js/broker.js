class Broker {
    constructor(options) {
            this.consumers = options.consumers ? options.consumers : []
            this.producers = options.producers ? options.producers: []

    }

    addConsumer(consumer) {
        this.consumers.push(consumer)
    }

    removeConsumer(consumer) {
        this.consumers = this.consumers.filter(ele => ele !=consumer)
    }

    removeProducer(producer) {
        this.producer = this.producer.filter(ele => ele != producer)
    }

    addProducer(producer) {
        this.producers.push(producer)
    }

    signalProducers(event) {
        return this.producers.map(element => {
            return element.signal(event)
        });
    }

    signalConsumers(event) {
        return this.consumers.map(element => {
            return element.signal(event)
        });
    }

   signal(event) {
        // return new Promise((resolve) => resolve(signalProducers)) 
        if (event.source === "producer")
            return this.signalConsumers(event)
        return this.signalProducers(event)
    }
}

export default Broker