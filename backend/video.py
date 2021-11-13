import cv2

video_path = "/home/anas/Desktop/Freelancing/mask-detection-webbapp/backend/mask.mp4"

class VideoCamera(object):
    def __init__(self):
      self.video = cv2.VideoCapture(video_path)
    def __del__(self):
      self.video.release()
    def get_frame(self):
      ret, frame = self.video.read()
      ret, jpeg = cv2.imencode('.jpg', frame)
      return jpeg.tobytes()