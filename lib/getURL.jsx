//~ Copyright 2017-2017 Mikhail Sorokin
//~  Original sources are available at 

//~  Licensed under the Apache License, Version 2.0 (the "License");
//~  you may not use this file except in compliance with the License.
//~  You may obtain a copy of the License at

//~  http://www.apache.org/licenses/LICENSE-2.0

//~  Unless required by applicable law or agreed to in writing, software
//~  distributed under the License is distributed on an "AS IS" BASIS,
//~  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//~  See the License for the specific language governing permissions and
//~  limitations under the License.
 
 //~ var myReq = GetUrlRequest ("www.weststreetconsulting.com", "/resources/es_sample.txt");
//~ var myReq = GetUrlRequest ("www.httpbin.org", "/get?qwe=123");
//~ alert (myReq);

function GetUrlRequest (site, page) //("www.weststreetconsulting.com", "/resources/es_sample.txt");
{ 
    var conn = new Socket;
    if (conn.open (site + ":80", "UTF-8"))
    {
        var getRequest = "GET " + page + " HTTP/1.1\r\n" +
            "Host: " + site + "\r\n\r\n";

        conn.encoding = "BINARY";
        
        conn.write(getRequest);
        
        //We run a little counter to make sure we don't enter an
        //endless loop if something goes amiss with the network.
        var endlessLoopCounter = 0;
        var responseHeader = "";
        
        while(responseHeader.substring(responseHeader.length - 4, 
            responseHeader.length) != "\r\n\r\n")
        {
            //Read in a single character and add it to our running string
            responseHeader += conn.read(1);
            
            //Check for an endless loop. We'll allow 1,000 characters to
            //go by before we decide there is a critical problem.
            if(endlessLoopCounter++ > 1000)
            {
//~                 alert("Something unusual happened while attempting to " +
//~                     "retrieve the HTTP response header. This operation " +
//~                     "will not behave as expected.");
                return([0, "Ошибка! Что-то случилось во время получения заголовка ответа.", "Ошибка!"]);
                //break out of the while loop.
                responseHeader = "";
                break;
            }
        }
    
        var responseCode = 0;
        var index1 = responseHeader.toLowerCase().indexOf("http/1.1");
        var index2 = responseHeader.toLowerCase().indexOf("\r\n", index1);
        if(index2 < 0) responseHeader.toLowerCase().indexOf("\n", index1);
        if(index1 > -1)
        {
            responseCode = parseInt(responseHeader.substring(index1 + 8, index2));
        }
    
        var contentLength = 0;        
        index1 = responseHeader.toLowerCase().indexOf("content-length:");
        index2 = responseHeader.toLowerCase().indexOf("\r\n", index1);
        if(index2 < 0) responseHeader.toLowerCase().indexOf("\n", index1);
        if(index1 > -1)
        {
            contentLength = parseInt(responseHeader.substring(index1 + 15, index2));
        }
        else 
        {
            return [responseCode, "Ошибка! Длина контента не найдена в загловке.", "Ошибка!"];
        }
        
    
        var content = "";        
        for(var i = 0; i < contentLength; i++)
        {
            content += conn.read(1);
        }
    
        if(content == "")
        {
            return [responseCode, "Ошибка! Что-то случилось во время чтения контента.", "Ошибка!"];
            content = "Error!";
        }
            conn.close();
            return [responseCode, responseHeader, content];
    }
    else return [0, "Ошибка! Нет доступа к соккету:" + site +":80", "Ошибка!"];
}       
