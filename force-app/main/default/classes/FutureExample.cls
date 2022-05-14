public class FutureExample {
    
    @future
    public static void m1(){
        System.debug('call me m1');
        System.debug('call me m11');
    }
    
    @future
    public static void m2(){
        System.debug('call me m2');
        System.debug('call me m22');
    }
    
    public static void m3(){
        System.debug('call me m31');
        System.debug('call me m32');
        m1();
        System.debug('call me m33');
        System.debug('call me m34');
       m2();
        System.debug('call me m35');
        System.debug('call me m36');
        
    }
    
}