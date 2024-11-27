package vehiclemgmt.domain;

import java.time.LocalDate;
import java.util.*;
import lombok.*;
import vehiclemgmt.domain.*;
import vehiclemgmt.infra.AbstractEvent;

//<<< DDD / Domain Event
@Data
@ToString
public class UserCreated extends AbstractEvent {

    private Long id;
    private String name;
    private String email;

    public UserCreated(User aggregate) {
        super(aggregate);
    }

    public UserCreated() {
        super();
    }
}
//>>> DDD / Domain Event
