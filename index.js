const {Storage} = require('@google-cloud/storage');
const path = require('path');
const destination_bucket_name = 'order_data_bucket_target'; //process.env.target_bucket
exports.copyFileFromSourceToTarget = async (event, context) => {
  const storage = new Storage();
  const source_bucket_name = event.bucket;
  const file_name = event.name;

  if(path.extname(file_name)==='.json'){
    await storage
    .bucket(source_bucket_name)
    .file(file_name)
    .copy(storage.bucket(destination_bucket_name).file(file_name));
  }
  else{
    console.log('File is not json');
  }
  
};
