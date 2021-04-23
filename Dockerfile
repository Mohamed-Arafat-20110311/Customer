
# Step 1: Compile and Build angular codebase

# Use official node image as the base image
#FROM node:10 as build
# Set the working directory and move the source code to app
#WORKDIR /usr/local/app
#COPY ./ /usr/local/app/

# Install all the dependencies and Build the Application
#RUN npm install
#RUN npm run build

# Step 2: Serve app on nginx server
#FROM nginx:latest
# Copy the build output to replace the default nginx contents.
#COPY --from=build /usr/local/app/dist/Customer /usr/share/nginx/html

# Expose port 4200
#EXPOSE 4200

# Expose app
#ENTRYPOINT ["nginx", "-g", "daemon off;"]
########################################################################################
FROM node:10
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
RUN npm install
RUN npm install -g @angular/cli@10.2.0
COPY . /app
EXPOSE 4200
CMD npm start
