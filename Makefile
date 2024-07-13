default: deploy

clean:
	rm -rf public public.zip

build:
	hugo

zip:
	zip -r public.zip public

deploy: clean build zip
	./deploy.sh

watch:
	hugo server
