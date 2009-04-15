package org.mockito.internal.returnvalues;

import org.mockito.ReturnValues;
import org.mockito.internal.MockitoCore;
import org.mockito.internal.creation.jmock.ClassImposterizer;
import org.mockito.invocation.InvocationOnMock;

public class MockReturnValues implements ReturnValues {
	
	private ReturnValues delegate = new MoreEmptyReturnValues();
	
	public Object valueFor(InvocationOnMock invocation){
		Object ret = delegate.valueFor(invocation);
		if (ret != null) {
			return ret;
		}
			
		return returnValueFor(invocation.getMethod().getReturnType());
	}

	@SuppressWarnings("unchecked")
	Object returnValueFor(Class<?> class1) {
		if (!ClassImposterizer.INSTANCE.canImposterise(class1)) {
			return null;
		}
		
		return MockitoCore.mock((Class)class1, null, null, this);
	}

}