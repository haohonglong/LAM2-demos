package main

import (
    "fmt"
    "os"
    "net/http"
	_"io/ioutil"
	"log"
    "encoding/json"
)

// 允许跨域的中间件
func CorsMiddleware(next http.Handler) http.Handler {
    return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
        w.Header().Set("Access-Control-Allow-Origin", "*") // 允许任何源
        w.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
        w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
        if r.Method == "OPTIONS" {
            w.WriteHeader(http.StatusOK)
            return
        }
        next.ServeHTTP(w, r)
    })
}
// building a html what you want
func buildiing(path,file,content string) error {
    // 使用 os.Stat 检查文件夹是否存在
    if _, err := os.Stat(path); os.IsNotExist(err) {
        // 目录不存在，创建目录
        err = os.Mkdir(path, 0750)
        if err != nil {
            log.Fatal(err)
        }
        fmt.Println("目录创建成功:", path)
    }

    // 目录存在
    // err := ioutil.WriteFile(file, []byte(content), 0644)
    err := os.WriteFile(file, []byte(content), 0660)
    return err
}


func main() {
	http.Handle("/", CorsMiddleware(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
        filename := r.FormValue("filename")
		content := r.FormValue("content")
		path := r.FormValue("path")
        file := path + "/" + filename

        err := buildiing(path, file, content)
        if err != nil {
            log.Fatal(err)
        } else {
            data := map[string]interface{}{
                "msg":  "the file of the html has been builded",
                "status": 0,
            }
            jsonData, err := json.Marshal(data)
            if err != nil {
                // 处理错误
                http.Error(w, err.Error(), http.StatusInternalServerError)
                return
            }
            w.Header().Set("Content-Type", "application/json")
            w.Write(jsonData)
        }

		
    })))


    http.ListenAndServe(":8090", nil)
}