module.exports = {
	type: 'service',
	prerequisites: {
		cpu: '',
		memory: ''
	},
	serviceVersion: 1,
	serviceName: "noswagger",
	serviceGroup: "SOAJS No Swagger",
	requestTimeout: 30,
	requestTimeoutRenewal: 5,
	servicePort: 4020,
	extKeyRequired: false,
	oauth: false,
	"errors": {},
        "blueprint": "blueprint.json",
        "component.spec": "spec.json",
        "config": "config.json"
};
