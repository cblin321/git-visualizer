class Broker {
    constructor(consumers, producers) {

        this.consumers = consumers
        this.producers = producers

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
        this.producers.forEach(element => {
            element.signal(event)
        });
    }

    signalConsumers(event) {
        this.consumers.forEach(element => {
            element.signal(event)
        });
    }

   async signal(event) {

        return new Promise((resolve) => resolve(signalProducers)) 
    }
}

export default Broker