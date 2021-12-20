#include <Wire.h>
#include <Adafruit_MLX90614.h>
#include <ESP8266WiFi.h> // import ESP8266 WiFi library

#include <WiFiClientSecure.h>

WiFiClientSecure client;



const char* ssid = "Wintersolidier68";//SSID for your local wireless
const char* password = "Warmachine68"; //Password

const char* host = "api.pushbullet.com";
const int httpsPort = 443; // the required port
const char* PushBulletAPIKEY = "o.EAEizJDDwbwqk4T1rTnDJulm1VtKhYuP"; //get it from your pushbullet account
Adafruit_MLX90614 mlx = Adafruit_MLX90614();
float a = 0;
void setup() {
  Serial.begin(115200);
  mlx.begin();
  Serial.println();
  Serial.print("connecting to ");
  Serial.println(ssid);
  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.println("WiFi connected");
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());

  // Use WiFiClientSecure class to create TLS connection
  WiFiClientSecure client;
  Serial.print("connecting to ");
  client.setInsecure();
  Serial.println(host);
  if (!client.connect(host, httpsPort)) {
    Serial.println("connection failed");
    return;
  }
  Serial.print("Successful");
  delay(2000);
  String url = "/v2/pushes";
  String messagebody_note = "{\"type\": \"note\", \"title\": \"Initialized\", \"body\": \"COVID 19 Fever Detection System\"}\r\n";
  Serial.print("requesting URL: ");
  Serial.println(url);
  //send a simple note
  client.print(String("POST ") + url + " HTTP/1.1\r\n" +
               "Host: " + host + "\r\n" +
               "Authorization: Bearer " + PushBulletAPIKEY + "\r\n" +
               "Content-Type: application/json\r\n" +
               "Content-Length: " +
               String(messagebody_note.length()) + "\r\n\r\n");
  client.print(messagebody_note);
  //send a link

}


void loop() {
  Serial.print("Ambient Temperature  :  ");
  Serial.print(mlx.readAmbientTempC());
  Serial.print(" C");
  Serial.println();

  Serial.print("Object Temperature  :    ");
  Serial.print(mlx.readObjectTempC());
  Serial.print(" C");
  Serial.println();

  a = mlx.readObjectTempC();
  if (a >= 35) {
    WiFiClientSecure client;
    Serial.print("connecting to ");
    client.setInsecure();
    Serial.println(host);
    if (!client.connect(host, httpsPort)) {
      Serial.println("connection failed");
      return;
    }
    Serial.print("Successful");
    String url = "/v2/pushes";
    String messagebody_note = "{\"type\": \"note\", \"title\": \"Warning!!!\", \"body\": \"Critical Temperature Detected!!\"}\r\n";
    Serial.print("requesting URL: ");
    Serial.println(url);
    //send a simple note
    client.print(String("POST ") + url + " HTTP/1.1\r\n" +
                 "Host: " + host + "\r\n" +
                 "Authorization: Bearer " + PushBulletAPIKEY + "\r\n" +
                 "Content-Type: application/json\r\n" +
                 "Content-Length: " +
                 String(messagebody_note.length()) + "\r\n\r\n");
    client.print(messagebody_note);
    Serial.println(a);
  }
  delay(500);
}
