package vehiclemgmt.infra;

import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.Link;
import org.springframework.hateoas.server.RepresentationModelProcessor;
import org.springframework.stereotype.Component;
import vehiclemgmt.domain.*;

@Component
public class VehicleHateoasProcessor
    implements RepresentationModelProcessor<EntityModel<Vehicle>> {

    @Override
    public EntityModel<Vehicle> process(EntityModel<Vehicle> model) {
        model.add(
            Link
                .of(
                    model.getRequiredLink("self").getHref() +
                    "/updatevehiclestatus"
                )
                .withRel("updatevehiclestatus")
        );

        return model;
    }
}
