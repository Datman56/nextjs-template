const { Dropbox } = require("dropbox");

const dbx = new Dropbox({
    accessToken: process.env.DROPBOX_ACCESS_TOKEN,
    fetch,
  });
  

  export const getDropboxFile = async (fileName) => {
    const path = "/raulrico-work" 
    try {
      const data = await dbx.filesListFolder({ path: path });
      const res = data.result.entries
      console.log(res);

      return res
    } catch (error) {
      return error;
    }
  
  }