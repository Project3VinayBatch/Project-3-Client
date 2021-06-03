

node{
  tools {nodejs "npm"} 
	stage("Clone")
	{
		git url: "https://github.com/Project3VinayBatch/Project-3-Client", branch: 'master'
	}
	stage("Build")
	{
    sh "npm install"
		sh "cd ${WORKSPACE}"
		sh "ng build --prod"
	}
	
}	


