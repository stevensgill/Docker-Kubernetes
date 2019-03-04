# Use an existing docker i,mage as a base
FROM alpine

# Download and install a dependency
RUN apk add --update redis

# Tell the images whar to do wgen it starts as a container
CMD ["redis-server"]