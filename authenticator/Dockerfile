FROM maven:3.9.3-amazoncorretto-17
COPY . /usr/src/myapp
WORKDIR /usr/src/myapp
RUN mvn dependency:copy-dependencies
RUN mvn dependency:go-offline
CMD ["mvn", "spring-boot:run"]