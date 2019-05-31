package chatRoom;

import java.io.IOException;
import java.util.Map.Entry;
import java.util.concurrent.ConcurrentHashMap;

import javax.websocket.*;  
import javax.websocket.server.ServerEndpoint;

import com.google.gson.Gson;

@ServerEndpoint("/websocket")
public class WebSocketTest {

	 //��̬������������¼��ǰ������������Ӧ�ð�����Ƴ��̰߳�ȫ�ġ�  
    private static int onlineCount = 0;  

    private static ConcurrentHashMap<Session, WebSocketTest> ssMap= new ConcurrentHashMap<Session, WebSocketTest>();

    //��ĳ���ͻ��˵����ӻỰ����Ҫͨ���������ͻ��˷�������  
    private Session session;  

    /** 
     * ���ӽ����ɹ����õķ��� 
     * @param session  ��ѡ�Ĳ�����sessionΪ��ĳ���ͻ��˵����ӻỰ����Ҫͨ���������ͻ��˷������� 
     */  
    @OnOpen  
    public void onOpen(Session session){  
        this.session = session;
        System.out.println(session.getQueryString().split("=")[1]);
        ssMap.put(session, this);
        addOnlineCount();           //��������1  
        System.out.println("�������Ӽ��룡��ǰ��������Ϊ" + getOnlineCount());  
    }  

    /** 
     * ���ӹرյ��õķ��� 
     */  
    @OnClose  
    public void onClose(){  
        ssMap.remove(this.session);
        subOnlineCount();           //��������1  
        System.out.println("��һ���ӹرգ���ǰ��������Ϊ" + getOnlineCount());  
    }  

    /** 
     * �յ��ͻ�����Ϣ����õķ��� 
     * @param message �ͻ��˷��͹�������Ϣ 
     * @param session ��ѡ�Ĳ��� 
     */  
    @OnMessage  
    public void onMessage(String message, Session session) {  
    	if(message.equals("websocket")) {
    		return;
    	}
        System.out.println("���Կͻ��˵���Ϣ:" + message);  
        String id = session.getQueryString().split("=")[1];
        Gson gson = new Gson();
        try {
        	for(Entry<Session, WebSocketTest> entry: ssMap.entrySet()) {
				WebSocketTest tmp = entry.getValue();
        		Msg msg = new Msg(id, message);
        		tmp.sendMessage(gson.toJson(msg));
        	}
        } catch (IOException e1) {
            e1.printStackTrace();
        }
    }  

    /** 
     * ��������ʱ���� 
     * @param session 
     * @param error 
     */  
    @OnError  
    public void onError(Session session, Throwable error){  
        System.out.println("��������");  
        error.printStackTrace();  
    }  

    /** 
     * ������������漸��������һ����û����ע�⣬�Ǹ����Լ���Ҫ��ӵķ����� 
     * @param message 
     * @throws IOException 
     */  
    public void sendMessage(String message) throws IOException{  
        this.session.getBasicRemote().sendText(message);  
        //this.session.getAsyncRemote().sendText(message);  
    }  

    public static synchronized int getOnlineCount() {  
        return onlineCount;  
    }  

    public static synchronized void addOnlineCount() {  
    	WebSocketTest.onlineCount++;  
    }  

    public static synchronized void subOnlineCount() {  
    	WebSocketTest.onlineCount--;  
    }
}
