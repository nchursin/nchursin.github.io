default: clean build zip deploy

clean:
	rm -rf public public.zip

build:
	hugo

zip:
	zip -r public.zip public

deploy:
	./deploy.sh

watch:
	hugo server
