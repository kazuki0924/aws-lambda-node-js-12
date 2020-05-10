exports.handler = async (event, context) => {
	context.getRemainingTimeInMillis()

	context.functionName
	context.functionVersion
	context.functionArn
	context.awsRequestId
	context.memoryLimitInMB
	context.identity
	context.logGroupName
	context.logStreamName
	context.clientContext.env.platform_version
}
