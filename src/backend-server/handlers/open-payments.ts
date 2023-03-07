// getPayeeProxyDisplayInfo
import Logger from '@mojaloop/central-services-logger'
import { Request, ResponseObject } from '@hapi/hapi'
import axios from 'axios'
import { StateResponseToolkit } from '../../shared/plugins/state'

async function IdTypeIncomingPaymentsPost(_context: unknown, _request: Request, h: StateResponseToolkit): Promise<ResponseObject>  {
  try {
    const destUrl = h.context.serviceConfig.endpoints.sdkUrl + _request.path

    // Construct the sdk payload here based on the _request.payload
    const requestOut = {

    }

    const headersOut = {

    }
    
    const { data, status } = await axios.post(
      destUrl,
      requestOut,
      {
        headers: headersOut,
      },
    );

    // Construct the response payload of open-payments based on `data` here
    const responseOut = {

    }
    return h.response(responseOut).code(status)
  } catch (error) {
    if (axios.isAxiosError(error)) {
      Logger.error('error message: ', error.message);
      return h.response(error.message).code(500)
    } else {
      Logger.error('unexpected error: ', error);
      return h.response('An unexpected error occurred').code(500)
    }
  }
}

export default {
  IdTypeIncomingPaymentsPost
}
