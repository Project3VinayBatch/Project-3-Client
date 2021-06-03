

node{
  
	stage("Clone")
	{
		git url: "https://github.com/Project3VinayBatch/Project-3-Client", branch: 'master'
	}
	stage("Build")
	{
    sh "export PATH=$PATH:/usr/local/bin"
    sh "cd ${WORKSPACE}"
    sh "npm install"
		sh "ng build --prod"
	}
	
}	


