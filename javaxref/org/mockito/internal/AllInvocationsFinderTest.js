defineStructure(
"AllInvocationsFinderTest",function(factory){with(factory) { typeTable(["java.util.Arrays","cl"],["org.mockito.Mockito","cl"],["java.util.List","it"],["org.junit.Before","an"],["org.junit.Test","an"],["org.mockito.TestBase","cl"],["org.mockito.internal.invocation.AllInvocationsFinder","cl"],["org.mockito.internal.invocation.Invocation","cl"],["org.mockitousage.IMethods","it"],["org.mockito.internal.AllInvocationsFinderTest","cl"],["java.lang.Class","cl"],["java.lang.Exception","cl"],["junit.framework.Assert","cl"],["java.lang.Object","cl"]),methodTable([9,"setup",[],"me"],[6,"AllInvocationsFinder",[],"co"],[1,"mock",[10],"st me"],[9,"shouldGetAllInvocationsInOrder",[],"me"],[8,"simpleMethod",["int"],"me"],[6,"getAllInvocations",[2],"me"],[0,"asList",["java.lang.Object[]"],"st me"],[12,"assertEquals",["int","int"],"st me"],[2,"size",[],"me"],[9,"assertArgumentEquals",[13,7],"me"],[2,"get",["int"],"me"],[12,"assertEquals",[13,13],"st me"],[7,"getArguments",[],"me"]),localVariableTable(["invocations","shouldGetAllInvocationsInOrder()-invocations"],["argumentValue","assertArgumentEquals(java.lang.Object,org.mockito.internal.invocation.Invocation)-argumentValue"],["invocation","assertArgumentEquals(java.lang.Object,org.mockito.internal.invocation.Invocation)-invocation"])
return classDef(O("/*",nl," * Copyright (c) 2007 Mockito contributors",nl," * This program is made available under the terms of the MIT License.",nl," */"),nl,pa," org.mockito.internal;",nl,nl,ip,_,s," java.util.",T(0),".*;",nl,ip,_,s," org.mockito.",T(1),".*;",nl,nl,ip," java.util.",T(2),";",nl,nl,ip," org.junit.",T(3),";",nl,ip," org.junit.",T(4),";",nl,ip," org.mockito.",T(5),";",nl,ip," org.mockito.internal.invocation.",T(6),";",nl,ip," org.mockito.internal.invocation.",T(7),";",nl,ip," org.mockitousage.",T(8),";",nl,nl,C(9,[],$(pu,_,c,_,I("AllInvocationsFinderTest"),_,ex,_,T(5),_,B(nl,w(4),nl,w(4),F(pi,_,T(6),_,I("finder"),";"),nl,w(4),F(pi,_,T(8),_,I("mockTwo"),";"),nl,w(4),F(pi,_,T(8),_,I("mockOne"),";"),nl,nl,w(4),M(0,[],[],$("@",T(3),nl,w(4),pu,_,v,_,I("setup"),P(),_,B(nl,w(8),G(9,"fi","finder")," = ",n,_,N(1),P(),";",nl,w(8),G(9,"fi","mockOne")," = ",N(2),P(T(8),".",c),";",nl,w(8),G(9,"fi","mockTwo")," = ",N(2),P(T(8),".",c),";",nl,w(4)))),nl,w(4),nl,w(4),M(3,[],[],$("@",T(4),nl,w(4),pu,_,v,_,I("shouldGetAllInvocationsInOrder"),P(),_,ts,_,T(11),_,B(nl,w(8),G(9,"fi","mockOne"),".",N(4),P(L("100")),";",nl,w(8),G(9,"fi","mockTwo"),".",N(4),P(L("200")),";",nl,w(8),G(9,"fi","mockOne"),".",N(4),P(L("300")),";",nl,w(8),nl,w(8),V(0,$(T(2),"&lt;",T(7),"> ",I("invocations")," = ",G(9,"fi","finder"),".",N(5),P(N(6),P(G(9,"fi","mockOne"),", ",G(9,"fi","mockTwo"))),";")),nl,w(8),nl,w(8),N(7),P(L("3"),", ",W(0),".",N(8),P()),";",nl,w(8),N(9),P(L("100"),", ",W(0),".",N(10),P(L("0"))),";",nl,w(8),N(9),P(L("200"),", ",W(0),".",N(10),P(L("1"))),";",nl,w(8),N(9),P(L("300"),", ",W(0),".",N(10),P(L("2"))),";",nl,w(4)))),nl,nl,w(4),M(9,[],[],$(pi,_,v,_,I("assertArgumentEquals"),P(V(1,$(T(13),_,I("argumentValue"))),", ",V(2,$(T(7),_,I("invocation")))),_,B(nl,w(8),N(11),P(W(1),", ",W(2),".",N(12),P(),"[",L("0"),"]"),";",nl,w(4)))),nl))));}});